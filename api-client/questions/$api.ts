import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "http://localhost:3000" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/questions";
  const GET = "GET";

  return {
    /**
     * 質問と回答項目のリストを取得する
     * @returns OK
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0["get"]["resBody"],
        BasicHeaders,
        Methods0["get"]["status"]
      >(prefix, PATH0, GET, option).json(),
    /**
     * 質問と回答項目のリストを取得する
     * @returns OK
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0["get"]["resBody"],
        BasicHeaders,
        Methods0["get"]["status"]
      >(prefix, PATH0, GET, option)
        .json()
        .then((r) => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
