/* eslint-disable */
import type * as Types from "../@types";

export type Methods = {
  /** 診断結果に基づくおすすめの団体リストを取得する */
  get: {
    query?:
      | {
          /** 質問の回答を含めるか選択します */
          includeQuestions?: boolean | undefined;
          /** 団体の詳細情報を含めるか選択します */
          includeOrgsContent?: boolean | undefined;
        }
      | undefined;

    status: 200;

    /** OK */
    resBody: {
      recommendation: Types.Recommendation;
      questions?: Types.QuestionResult[] | undefined;
    };
  };

  /** 診断からスタンプカード・ソート済み団体リストを作成する */
  put: {
    status: 200;

    /** OK */
    resBody: {
      recommendation: Types.Recommendation;
    };

    /** 診断用質問の回答リスト */
    reqBody: Types.QuestionResult[];
  };
};
