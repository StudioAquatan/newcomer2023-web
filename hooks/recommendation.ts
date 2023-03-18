import useSWR from "swr";
import { QuestionResult } from "../api-client/@types";
import { apiClient } from "../api-client/apiClient";
import { Methods } from "../api-client/recommendation";
import useUser from "./user";

export const NoRecommendation = Symbol.for("NoRecommendation");

export function useRecommendation() {
  const { data: user } = useUser();
  const token = user?.token;
  return useSWR(
    token ? ["/recommendation", token] : null,
    async () => {
      if (typeof window === "undefined") return NoRecommendation;

      const recommendations = await apiClient.recommendation
        .$get({
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
          console.warn("Failed to fetch /recommendation.", error);

          return NoRecommendation;
        });

      return recommendations;
    },
    { revalidateOnFocus: false, errorRetryCount: 0, revalidateIfStale: false }
  );
}

export function isRecommendationReady(
  recommendation?: Methods["get"]["resBody"] | symbol
): recommendation is Methods["get"]["resBody"] {
  return typeof recommendation === "object";
}

export function usePutRecommendation() {
  const { data: userData } = useUser();
  const { mutate } = useRecommendation();

  return async (answers: Map<string, QuestionResult>) => {
    if (!userData?.token) {
      throw new Error("No token provided");
    }

    const response = await apiClient.recommendation.put({
      body: Array.from(answers.values()),
      config: {
        headers: {
          Authorization: "Bearer " + userData.token,
        },
      },
    });

    await mutate(response.body, { revalidate: false });

    return response;
  };
}

export function useExcludeRecommendation() {
  const { data: userData } = useUser();
  const { mutate } = useRecommendation();

  return async (op: "add" | "remove", orgId: string) => {
    if (!userData?.token) {
      throw new Error("No token provided");
    }

    let response;
    if (op === "add") {
      response = apiClient.recommendation._orgId(orgId).$delete({
        config: {
          headers: {
            Authorization: "Bearer " + userData.token,
          },
        },
      });
    } else {
      response = apiClient.recommendation._orgId(orgId).$patch({
        config: {
          headers: {
            Authorization: "Bearer " + userData.token,
          },
        },
      });
    }

    await mutate(response, { revalidate: false });

    return response;
  };
}
