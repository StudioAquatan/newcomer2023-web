import useSWR from "swr";
import { apiClient } from "../api/apiClient";
import {
  useOrganizationsMap as useOrganizationsMapJotai,
  useSetOrganizationsMap,
} from "../store/organizationsMap";

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
          throw new Error(err);
        });

      return res;
    },
    { revalidateOnFocus: false }
  );
}

export function useOrganizationsMap() {
  const { organizationsMap } = useOrganizationsMapJotai();
  const { setOrganizationsMap } = useSetOrganizationsMap();
  const { data: organizations, error } = useOrganizations();

  if (organizationsMap.size > 0) {
    // キャッシュで返す
    return {
      organizationsMap: organizationsMap,
    };
  } else {
    if (error) {
      throw new Error(error);
    }

    if (!organizations) {
      return {
        organizationsMap: organizationsMap,
      };
    }

    const orgMap = new Map(organizations.map((org) => [org.id, org]));
    setOrganizationsMap({ organizationsMap: orgMap });
    return {
      organizationsMap: orgMap,
    };
  }
}
