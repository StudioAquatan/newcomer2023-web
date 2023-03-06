/* eslint-disable */
import type * as Types from "../@types";

export type Methods = {
  /** 全団体のリストを取得する */
  get: {
    status: 200;
    /** OK */
    resBody: Types.OrganizationFull[];
  };
};
