import useSWR from "swr";
import { apiClient } from "../api/apiClient";

export function useRecommendation() {
  return useSWR("/recommendation", async () => {
    const recommendations = await apiClient.recommendation
      .$get()
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw new Error("Failed to fetch /recommendation.", error);
      });

    return recommendations;
  });
}
