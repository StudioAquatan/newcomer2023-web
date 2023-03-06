import React from "react";
import useSWR from "swr";
import { OrganizationFull } from "../api/@types";
import { apiClient } from "../api/apiClient";

const organizationsContext = React.createContext<OrganizationFull[]>([]);

export function useOrganizations() {
  const organizationsCache = React.useContext(organizationsContext);
  return useSWR("/orgs", async () => {
    if (organizationsCache.length > 0) {
      return {
        organizations: organizationsCache,
        organizationsMap: new Map(
          organizationsCache.map((org) => [org.id, org])
        ),
      };
    }
    const orgs = await apiClient.orgs
      .$get()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new Error("Failed to fetch /orgs.", err);
      });

    return {
      organizations: orgs,
      organizationsMap: new Map(orgs.map((org) => [org.id, org])),
    };
  });
}

export const OrganizationProvider = organizationsContext.Provider;
