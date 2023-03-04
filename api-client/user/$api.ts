import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "http://localhost:3000" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/user";
  const GET = "GET";
  const POST = "POST";
  const PATCH = "PATCH";

  return {
    /**
     * 匿名ユーザを作成し，認証用トークンを返します
     * @returns ユーザが正常に作成された
     */
    post: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0["post"]["resBody"],
        BasicHeaders,
        Methods0["post"]["status"]
      >(prefix, PATH0, POST, option).json(),
    /**
     * 匿名ユーザを作成し，認証用トークンを返します
     * @returns ユーザが正常に作成された
     */
    $post: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0["post"]["resBody"],
        BasicHeaders,
        Methods0["post"]["status"]
      >(prefix, PATH0, POST, option)
        .json()
        .then((r) => r.body),
    /**
     * @returns OK
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0["get"]["resBody"],
        BasicHeaders,
        Methods0["get"]["status"]
      >(prefix, PATH0, GET, option).json(),
    /**
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
    /**
     * ユーザ情報を更新します．現在はニックネーム更新のみです
     * @returns OK
     */
    patch: (option: {
      body: Methods0["patch"]["reqBody"];
      config?: T | undefined;
    }) =>
      fetch<
        Methods0["patch"]["resBody"],
        BasicHeaders,
        Methods0["patch"]["status"]
      >(prefix, PATH0, PATCH, option).json(),
    /**
     * ユーザ情報を更新します．現在はニックネーム更新のみです
     * @returns OK
     */
    $patch: (option: {
      body: Methods0["patch"]["reqBody"];
      config?: T | undefined;
    }) =>
      fetch<
        Methods0["patch"]["resBody"],
        BasicHeaders,
        Methods0["patch"]["status"]
      >(prefix, PATH0, PATCH, option)
        .json()
        .then((r) => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
