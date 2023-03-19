import { HTTPError } from "@aspida/fetch";
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
          if (error instanceof HTTPError) {
            if (error.response.status === 404) {
              return NoRecommendation;
            } else {
              console.warn(
                "Unknown status code from /recommendation.",
                error.response.status
              );
              throw new Error("Unknown error code from recommendation", {
                cause: error,
              });
            }
          } else {
            console.error("Failed to fetch /recommendation.", error);
          }

          throw new Error("Unknown error while getting recommendation", {
            cause: error,
          });
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

    const response = apiClient.recommendation.$put({
      body: Array.from(answers.values()),
      config: {
        headers: {
          Authorization: "Bearer " + userData.token,
        },
      },
    });

    await mutate(response, { revalidate: false });

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
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .map(({ org }) => orgs.find(({ id }) => id === org.id)!),
      renderReady: true,
      available: true,
    };
  }, [orgs, recommendation, recommendationLoading, userData, userLoading]);
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
