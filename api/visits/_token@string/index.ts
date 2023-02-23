/* eslint-disable */
import type * as Types from "../../@types";

export type Methods = {
  /** 訪問を記録します．記録が重複する場合，上書きされません． */
  post: {
    status: 201;
    /** 訪問を記録した */
    resBody: Types.Visit;
  };
};
