import useSWR from "swr";
import { apiClient } from "../api/apiClient";

export function useOrganizations() {
  return useSWR("/orgs", async () => {
    const organizations = await apiClient.orgs
      .$get()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new Error("Failed to fetch /orgs.", err);
      });

    const orgMap = new Map(organizations.map((org) => [org.id, org]));

    return {
      organizations: organizations,
      organizationsMap: orgMap,
    };
  });
}
