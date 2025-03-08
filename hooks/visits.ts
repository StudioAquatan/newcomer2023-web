import { HTTPError } from "@aspida/fetch";
import useSWR from "swr";
import { apiClient } from "../api-client/apiClient";
import { VisitStatus } from "../components/visited/VisitedCard";
import useUser from "./user";

export function useGetVisits() {
  const { data: userData } = useUser();
  const token = userData?.token;

  return useSWR(
    null,
    async () => {
      if (typeof window === "undefined") return null;
      const response = await apiClient.visits
        .$get({
          config: {
            headers: {
              Authorization: "Bearer " + token,
            },
          },
        })
        .then((res) => {
          return res;
        });

      return response;
    },
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
    }
  );
}

export function useRecordVisits(visitsToken: string) {
  const { data: userData } = useUser();
  const { mutate } = useGetVisits();
  const token = userData?.token;

  return useSWR(
    null,
    async () => {
      if (typeof window === "undefined") return null;
      const response = await apiClient.visits
        ._token(visitsToken)
        .$post({
          config: {
            headers: {
              Authorization: "Bearer " + token,
            },
          },
        })
        .then((res) => {
          mutate();
          return { status: "success" as VisitStatus, response: res };
        })
        .catch((error) => {
          if (error instanceof HTTPError) {
            if (error.response.status === 404) {
              throw new Error("visitsToken is not valid.", {
                cause: error,
              });
            } else if (error.response.status === 401) {
              throw new Error("Unauthorized.", {
                cause: error,
              });
            } else if (error.response.status === 409) {
              return {
                status: "conflict" as VisitStatus,
                response: error.response,
              };
            } else if (error.response.status === 412) {
              throw new Error("まだ訪問記録ができません", {
                cause: error,
              });
            } else {
              console.warn(
                "Unknown status code from /visits.",
                error.response.status
              );
              throw new Error("Unknown error code from visits", {
                cause: error,
              });
            }
          }
        });

      return response;
    },
    { revalidateOnFocus: false, errorRetryCount: 0 }
  );
}
