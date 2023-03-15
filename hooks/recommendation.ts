import useSWR from "swr";
import { QuestionResult } from "../api-client/@types";
import { apiClient } from "../api-client/apiClient";
import useUser from "./user";

export const NoRecommendation = Symbol.for("NoRecommendation");

export function useRecommendation(token: string | undefined) {
  return useSWR(
    token ? ["/recommendation", token] : null,
    async () => {
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
    { revalidateOnFocus: true, errorRetryCount: 1 }
  );
}

export function usePutRecommendation() {
  const { data: userData } = useUser();

  return async (answers: Map<string, QuestionResult>) => {
    if (!userData?.token) {
      throw new Error("No token provided");
    }

    return apiClient.recommendation.put({
      body: Array.from(answers.values()),
      config: {
        headers: {
          Authorization: "Bearer " + userData?.token,
        },
      },
    });
  };
}
