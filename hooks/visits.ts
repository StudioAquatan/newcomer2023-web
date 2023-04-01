import { apiClient } from "../api-client/apiClient";
import useUser from "./user";

export function useVisits() {
  const { data: userData } = useUser();
  const token = userData?.token;

  return async (visitsToken: string) => {
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
        console.log("Failed to fetch /visits.", error);
        throw error;
      });

    return response;
  };
}
