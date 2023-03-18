/* eslint-disable */
import type * as Types from "../../@types";

export type Methods = {
  /** 特定団体のスタンプを除外し，補欠されたスタンプカードを返します */
  delete: {
    status: 200;
    /** OK */
    resBody: {
      recommendation: Types.Recommendation;
      questions?: Types.QuestionResult[] | undefined;
    };
  };

  /** 特定団体のスタンプを除外したのを削除し，補欠されたスタンプカードを返します */
  patch: {
    status: 200;
    /** OK */
    resBody: {
      recommendation: Types.Recommendation;
      questions?: Types.QuestionResult[] | undefined;
    };
  };
};
