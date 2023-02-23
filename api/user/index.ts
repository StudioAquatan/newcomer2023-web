/* eslint-disable */
import type * as Types from "../@types";

export type Methods = {
  /** 匿名ユーザを作成し，認証用トークンを返します */
  post: {
    status: 200;

    /** ユーザが正常に作成された */
    resBody: {
      /** 認証トークン */
      token: string;
      user: Types.User;
    };
  };

  get: {
    status: 200;
    /** OK */
    resBody: Types.User;
  };

  /** ユーザ情報を更新します．現在はニックネーム更新のみです */
  patch: {
    status: 200;
    /** OK */
    resBody: Types.User;

    reqBody: {
      /** 新しいニックネーム，nullでニックネーム削除 */
      nickname: string | null;
    };
  };
};
