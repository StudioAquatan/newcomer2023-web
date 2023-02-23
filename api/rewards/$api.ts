import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "http://localhost:3000" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/rewards";
  const GET = "GET";
  const PUT = "PUT";

  return {
    /**
     * 景品交換の状態を取得します．景品交換ができるかどうかも同時に取得できます．
     * @returns OK
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0["get"]["resBody"],
        BasicHeaders,
        Methods0["get"]["status"]
      >(prefix, PATH0, GET, option).json(),
    /**
     * 景品交換の状態を取得します．景品交換ができるかどうかも同時に取得できます．
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
    put: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0["put"]["status"]>(
        prefix,
        PATH0,
        PUT,
        option
      ).send(),
    $put: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0["put"]["status"]>(
        prefix,
        PATH0,
        PUT,
        option
      )
        .send()
        .then((r) => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
