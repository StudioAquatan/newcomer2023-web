/* eslint-disable */
import type * as Types from "../@types";

export type Methods = {
  /** 質問と回答項目のリストを取得する */
  get: {
    status: 200;
    /** OK */
    resBody: Types.Question[];
  };
};
