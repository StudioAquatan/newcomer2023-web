import { OrganizationFull } from "./@types";
import { apiClient } from "./apiClient";

// getStaticPropsで使うレスポンス群を保持するための部分
let orgsPromise: Promise<OrganizationFull[]> | null = null;

export function getOrgs() {
  orgsPromise =
    orgsPromise ??
    apiClient.orgs
      .$get()
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw Error(error);
      });
  return orgsPromise;
}
