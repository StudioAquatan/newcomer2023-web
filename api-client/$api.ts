import type { AspidaClient, BasicHeaders } from "aspida";
import { dataToURLString } from "aspida";
import type { Methods as Methods0 } from "./orgs";
import type { Methods as Methods1 } from "./questions";
import type { Methods as Methods2 } from "./recommendation";
import type { Methods as Methods3 } from "./recommendation/_orgId@string";
import type { Methods as Methods4 } from "./rewards";
import type { Methods as Methods5 } from "./user";
import type { Methods as Methods6 } from "./visits";
import type { Methods as Methods7 } from "./visits/_token@string";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "http://localhost:3000" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/orgs";
  const PATH1 = "/questions";
  const PATH2 = "/recommendation";
  const PATH3 = "/rewards";
  const PATH4 = "/user";
  const PATH5 = "/visits";
  const GET = "GET";
  const POST = "POST";
  const PUT = "PUT";
  const DELETE = "DELETE";
  const PATCH = "PATCH";

  return {
    orgs: {
      /**
       * 全団体のリストを取得する
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods0["get"]["resBody"],
          BasicHeaders,
          Methods0["get"]["status"]
        >(prefix, PATH0, GET, option).json(),
      /**
       * 全団体のリストを取得する
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
    },
    questions: {
      /**
       * 質問と回答項目のリストを取得する
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods1["get"]["resBody"],
          BasicHeaders,
          Methods1["get"]["status"]
        >(prefix, PATH1, GET, option).json(),
      /**
       * 質問と回答項目のリストを取得する
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods1["get"]["resBody"],
          BasicHeaders,
          Methods1["get"]["status"]
        >(prefix, PATH1, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    recommendation: {
      _orgId: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`;

        return {
          /**
           * 特定団体のスタンプを除外し，補欠されたスタンプカードを返します
           * @returns OK
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods3["delete"]["resBody"],
              BasicHeaders,
              Methods3["delete"]["status"]
            >(prefix, prefix1, DELETE, option).json(),
          /**
           * 特定団体のスタンプを除外し，補欠されたスタンプカードを返します
           * @returns OK
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods3["delete"]["resBody"],
              BasicHeaders,
              Methods3["delete"]["status"]
            >(prefix, prefix1, DELETE, option)
              .json()
              .then((r) => r.body),
          /**
           * 特定団体のスタンプを除外したのを削除し，補欠されたスタンプカードを返します
           * @returns OK
           */
          patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods3["patch"]["resBody"],
              BasicHeaders,
              Methods3["patch"]["status"]
            >(prefix, prefix1, PATCH, option).json(),
          /**
           * 特定団体のスタンプを除外したのを削除し，補欠されたスタンプカードを返します
           * @returns OK
           */
          $patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods3["patch"]["resBody"],
              BasicHeaders,
              Methods3["patch"]["status"]
            >(prefix, prefix1, PATCH, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * 診断結果に基づくおすすめの団体リストを取得する
       * @returns OK
       */
      get: (
        option?:
          | {
              query?: Methods2["get"]["query"] | undefined;
              config?: T | undefined;
            }
          | undefined
      ) =>
        fetch<
          Methods2["get"]["resBody"],
          BasicHeaders,
          Methods2["get"]["status"]
        >(prefix, PATH2, GET, option).json(),
      /**
       * 診断結果に基づくおすすめの団体リストを取得する
       * @returns OK
       */
      $get: (
        option?:
          | {
              query?: Methods2["get"]["query"] | undefined;
              config?: T | undefined;
            }
          | undefined
      ) =>
        fetch<
          Methods2["get"]["resBody"],
          BasicHeaders,
          Methods2["get"]["status"]
        >(prefix, PATH2, GET, option)
          .json()
          .then((r) => r.body),
      /**
       * 診断からスタンプカード・ソート済み団体リストを作成する
       * @param option.body - 診断用質問の回答リスト
       * @returns OK
       */
      put: (option: {
        body: Methods2["put"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods2["put"]["resBody"],
          BasicHeaders,
          Methods2["put"]["status"]
        >(prefix, PATH2, PUT, option).json(),
      /**
       * 診断からスタンプカード・ソート済み団体リストを作成する
       * @param option.body - 診断用質問の回答リスト
       * @returns OK
       */
      $put: (option: {
        body: Methods2["put"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods2["put"]["resBody"],
          BasicHeaders,
          Methods2["put"]["status"]
        >(prefix, PATH2, PUT, option)
          .json()
          .then((r) => r.body),
      $path: (
        option?:
          | { method?: "get" | undefined; query: Methods2["get"]["query"] }
          | undefined
      ) =>
        `${prefix}${PATH2}${
          option && option.query ? `?${dataToURLString(option.query)}` : ""
        }`,
    },
    rewards: {
      /**
       * 景品交換の状態を取得します．景品交換ができるかどうかも同時に取得できます．
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods4["get"]["resBody"],
          BasicHeaders,
          Methods4["get"]["status"]
        >(prefix, PATH3, GET, option).json(),
      /**
       * 景品交換の状態を取得します．景品交換ができるかどうかも同時に取得できます．
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods4["get"]["resBody"],
          BasicHeaders,
          Methods4["get"]["status"]
        >(prefix, PATH3, GET, option)
          .json()
          .then((r) => r.body),
      put: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods4["put"]["status"]>(
          prefix,
          PATH3,
          PUT,
          option
        ).send(),
      $put: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods4["put"]["status"]>(
          prefix,
          PATH3,
          PUT,
          option
        )
          .send()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
    user: {
      /**
       * 匿名ユーザを作成し，認証用トークンを返します
       * @returns ユーザが正常に作成された
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods5["post"]["resBody"],
          BasicHeaders,
          Methods5["post"]["status"]
        >(prefix, PATH4, POST, option).json(),
      /**
       * 匿名ユーザを作成し，認証用トークンを返します
       * @returns ユーザが正常に作成された
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods5["post"]["resBody"],
          BasicHeaders,
          Methods5["post"]["status"]
        >(prefix, PATH4, POST, option)
          .json()
          .then((r) => r.body),
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods5["get"]["resBody"],
          BasicHeaders,
          Methods5["get"]["status"]
        >(prefix, PATH4, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods5["get"]["resBody"],
          BasicHeaders,
          Methods5["get"]["status"]
        >(prefix, PATH4, GET, option)
          .json()
          .then((r) => r.body),
      /**
       * ユーザ情報を更新します．現在はニックネーム更新のみです
       * @returns OK
       */
      patch: (option: {
        body: Methods5["patch"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods5["patch"]["resBody"],
          BasicHeaders,
          Methods5["patch"]["status"]
        >(prefix, PATH4, PATCH, option).json(),
      /**
       * ユーザ情報を更新します．現在はニックネーム更新のみです
       * @returns OK
       */
      $patch: (option: {
        body: Methods5["patch"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods5["patch"]["resBody"],
          BasicHeaders,
          Methods5["patch"]["status"]
        >(prefix, PATH4, PATCH, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
    visits: {
      _token: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`;

        return {
          /**
           * 訪問を記録します．記録が重複する場合，上書きされません．
           * @returns 訪問を記録した
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods7["post"]["resBody"],
              BasicHeaders,
              Methods7["post"]["status"]
            >(prefix, prefix1, POST, option).json(),
          /**
           * 訪問を記録します．記録が重複する場合，上書きされません．
           * @returns 訪問を記録した
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods7["post"]["resBody"],
              BasicHeaders,
              Methods7["post"]["status"]
            >(prefix, prefix1, POST, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * 訪問した団体一覧を取得します
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods6["get"]["resBody"],
          BasicHeaders,
          Methods6["get"]["status"]
        >(prefix, PATH5, GET, option).json(),
      /**
       * 訪問した団体一覧を取得します
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods6["get"]["resBody"],
          BasicHeaders,
          Methods6["get"]["status"]
        >(prefix, PATH5, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH5}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
