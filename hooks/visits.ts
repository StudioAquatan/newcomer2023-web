import { HTTPError } from "@aspida/fetch";
import useSWR from "swr";
import { apiClient } from "../api-client/apiClient";
import useUser from "./user";

export function useVisits(visitsToken: string) {
  const { data: userData } = useUser();
  const token = userData?.token;

  return useSWR(
    token && visitsToken ? ["/visits", token, visitsToken] : null,
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
          return res;
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
              // VisitedCardを既に訪問済みのメッセージ表示に変更してあげたい
              console.warn("既に訪問済みです", error);
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
    { revalidateOnFocus: false }
  );
}
