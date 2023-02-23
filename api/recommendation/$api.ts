import type { AspidaClient, BasicHeaders } from "aspida";
import { dataToURLString } from "aspida";
import type { Methods as Methods0 } from ".";
import type { Methods as Methods1 } from "./_orgId@string";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "http://localhost:3000" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/recommendation";
  const GET = "GET";
  const PUT = "PUT";
  const DELETE = "DELETE";
  const PATCH = "PATCH";

  return {
    _orgId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * 特定団体のスタンプを除外し，補欠されたスタンプカードを返します
         * @returns OK
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<
            Methods1["delete"]["resBody"],
            BasicHeaders,
            Methods1["delete"]["status"]
          >(prefix, prefix0, DELETE, option).json(),
        /**
         * 特定団体のスタンプを除外し，補欠されたスタンプカードを返します
         * @returns OK
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<
            Methods1["delete"]["resBody"],
            BasicHeaders,
            Methods1["delete"]["status"]
          >(prefix, prefix0, DELETE, option)
            .json()
            .then((r) => r.body),
        /**
         * 特定団体のスタンプを除外したのを削除し，補欠されたスタンプカードを返します
         * @returns OK
         */
        patch: (option?: { config?: T | undefined } | undefined) =>
          fetch<
            Methods1["patch"]["resBody"],
            BasicHeaders,
            Methods1["patch"]["status"]
          >(prefix, prefix0, PATCH, option).json(),
        /**
         * 特定団体のスタンプを除外したのを削除し，補欠されたスタンプカードを返します
         * @returns OK
         */
        $patch: (option?: { config?: T | undefined } | undefined) =>
          fetch<
            Methods1["patch"]["resBody"],
            BasicHeaders,
            Methods1["patch"]["status"]
          >(prefix, prefix0, PATCH, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    /**
     * 診断結果に基づくおすすめの団体リストを取得する
     * @returns OK
     */
    get: (
      option?:
        | {
            query?: Methods0["get"]["query"] | undefined;
            config?: T | undefined;
          }
        | undefined
    ) =>
      fetch<
        Methods0["get"]["resBody"],
        BasicHeaders,
        Methods0["get"]["status"]
      >(prefix, PATH0, GET, option).json(),
    /**
     * 診断結果に基づくおすすめの団体リストを取得する
     * @returns OK
     */
    $get: (
      option?:
        | {
            query?: Methods0["get"]["query"] | undefined;
            config?: T | undefined;
          }
        | undefined
    ) =>
      fetch<
        Methods0["get"]["resBody"],
        BasicHeaders,
        Methods0["get"]["status"]
      >(prefix, PATH0, GET, option)
        .json()
        .then((r) => r.body),
    /**
     * 診断からスタンプカード・ソート済み団体リストを作成する
     * @param option.body - 診断用質問の回答リスト
     * @returns OK
     */
    put: (option: {
      body: Methods0["put"]["reqBody"];
      config?: T | undefined;
    }) =>
      fetch<
        Methods0["put"]["resBody"],
        BasicHeaders,
        Methods0["put"]["status"]
      >(prefix, PATH0, PUT, option).json(),
    /**
     * 診断からスタンプカード・ソート済み団体リストを作成する
     * @param option.body - 診断用質問の回答リスト
     * @returns OK
     */
    $put: (option: {
      body: Methods0["put"]["reqBody"];
      config?: T | undefined;
    }) =>
      fetch<
        Methods0["put"]["resBody"],
        BasicHeaders,
        Methods0["put"]["status"]
      >(prefix, PATH0, PUT, option)
        .json()
        .then((r) => r.body),
    $path: (
      option?:
        | { method?: "get" | undefined; query: Methods0["get"]["query"] }
        | undefined
    ) =>
      `${prefix}${PATH0}${
        option && option.query ? `?${dataToURLString(option.query)}` : ""
      }`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
