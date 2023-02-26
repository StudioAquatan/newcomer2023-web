import useSWR from "swr";
import { apiClient } from "../api/apiClient";

export function useOrganizations() {
  return useSWR(
    "/orgs",
    async () => {
      const res = await apiClient.orgs
        .$get()
        .then((res) => {
          return res;
        })
        .catch((err) => {
          throw new Error("Failed to fetch /orgs.", err);
        });

      return res;
    },
    { revalidateOnFocus: false }
  );
}

export function useOrganizationsMap() {
  const { data: organizations } = useOrganizations();
  return useSWR(
    "/orgsMap",
    () => {
      if (!organizations) {
        throw new Error("Empty organizations. Failed to fetch /orgsMap.");
      }

      const orgMap = new Map(organizations.map((org) => [org.id, org]));
      return orgMap;
    },
    { revalidateOnFocus: false }
  );
}
