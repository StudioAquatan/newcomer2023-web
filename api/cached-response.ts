import { apiClient } from "./apiClient";

// getStaticPropsで使うレスポンス群を保持するための部分
const orgsPromise = apiClient.orgs
  .$get()
  .then((res) => {
    return res;
  })
  .catch((error) => {
    throw Error(error);
  });

export function getOrgs() {
  return orgsPromise;
}
