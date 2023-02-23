/* eslint-disable */
import type * as Types from "../@types";

export type Methods = {
  /** 訪問した団体一覧を取得します */
  get: {
    status: 200;
    /** OK */
    resBody: Types.Visit[];
  };
};
