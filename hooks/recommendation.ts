import React from "react";
import useSWR from "swr";
import { OrganizationFull, QuestionResult } from "../api-client/@types";
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

export function useSortedOrgs(orgs: OrganizationFull[] = []) {
  const { data: userData, isLoading: userLoading } = useUser();
  const { data: recommendation, isLoading: recommendationLoading } =
    useRecommendation();

  return React.useMemo(() => {
    if (typeof window === "undefined")
      return {
        orgs: [],
        renderReady: false,
        available: false,
      };
    if (!userData || !isRecommendationReady(recommendation) || !orgs)
      return {
        orgs: orgs ?? [],
        renderReady: !userLoading && (!userData || !recommendationLoading),
        available: isRecommendationReady(recommendation),
      };

    // 全部そろった
    return {
      orgs: recommendation.recommendation.orgs
        .slice()
        .sort((a, b) => {
          if (a.isExcluded && b.isExcluded) return 0;
          if (a.isExcluded) return 1;
          if (b.isExcluded) return -1;
          return a.coefficient - b.coefficient;
        })
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .map(({ org }) => orgs.find(({ id }) => id === org.id)!),
      renderReady: true,
      available: true,
    };
  }, [orgs, recommendation, recommendationLoading, userData, userLoading]);
}
