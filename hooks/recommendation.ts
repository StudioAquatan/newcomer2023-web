import useSWR from "swr";
import { apiClient } from "../api-client/apiClient";

export function useRecommendation(token: string | undefined) {
  return useSWR(token ? ["/recommendation", token] : null, async () => {
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
        throw new Error("Failed to fetch /recommendation.", error);
      });

    return recommendations;
  });
}
