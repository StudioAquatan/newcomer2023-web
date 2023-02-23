import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";
import type { Methods as Methods1 } from "./_token@string";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "http://localhost:3000" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/visits";
  const GET = "GET";
  const POST = "POST";

  return {
    _token: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 訪問を記録します．記録が重複する場合，上書きされません．
         * @returns 訪問を記録した
         */
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<
            Methods1["post"]["resBody"],
            BasicHeaders,
            Methods1["post"]["status"]
          >(prefix, prefix0, POST, option).json(),
        /**
         * 訪問を記録します．記録が重複する場合，上書きされません．
         * @returns 訪問を記録した
         */
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<
            Methods1["post"]["resBody"],
            BasicHeaders,
            Methods1["post"]["status"]
          >(prefix, prefix0, POST, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    /**
     * 訪問した団体一覧を取得します
     * @returns OK
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0["get"]["resBody"],
        BasicHeaders,
        Methods0["get"]["status"]
      >(prefix, PATH0, GET, option).json(),
    /**
     * 訪問した団体一覧を取得します
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
