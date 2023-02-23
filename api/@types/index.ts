/* eslint-disable */
/** スタンプラリー参加者の情報です */
export type User = {
  /** ユーザーのUUID */
  id: string;
  /** OGP画像生成で使われるニックネームです．設定されていない場合nullになります */
  nickname: string | null;
  /** ユーザー登録の日時です */
  createdAt: string;
};

/** スタンプカードの情報を示します． */
export type Recommendation = {
  orgs: RecommendationItem[];
  /** あと何回興味のない部活を消せるかを示します */
  ignoreRemains: number;
  /** あと何回診断をやり直せるかを示します */
  renewRemains: number;
};

/** おすすめ団体の1つを示します */
export type RecommendationItem = {
  org: OrganizationFull | OrganizationSimple;

  /** 診断での一致度 */
  coefficient: number;
  /** 訪問したかどうか */
  isVisited: boolean;
  /** 興味がないを押したかどうか */
  isExcluded: boolean;
  /** スタンプのどの位置に表示するか(0 - 8 or -1:非表示) */
  stampSlot: number;
};

/** IDのみの団体情報です */
export type OrganizationSimple = {
  /** 団体のID */
  id: string;
};

export type OrganizationFull = OrganizationSimple & {
  /** 団体の正式名 */
  fullName: string;
  /** 団体の短縮名(表示名) */
  shortName: string;
  /** 短い紹介文 */
  shortDescription: string;
  logo?: Image | undefined;
  stampBackground?: Image | undefined;
  /** スタンプの背景色 */
  stampColor?: string | undefined;
  /** ロゴがないときに表示する絵文字 */
  altLogo?: string | undefined;
  /** 長い紹介文 */
  description: string;
  /** 活動場所 */
  location?: string | undefined;
  /** 部費情報 */
  fees?: string | undefined;
  /** 活動日 */
  activeDays?: string | undefined;
  /** 団体のリンク集 */
  links?: string[] | undefined;
};

/** 団体を訪問した記録です */
export type Visit = {
  id: string;
  /** 訪問のID */
  orgId: string;
  /** 訪問した時刻 */
  visitedAt: string;
};

export type Question = {
  id: string;
  /** 質問文 */
  questionText: string;
  /**
   * 質問の種類を示します．
   * yesno: はい or いいえ
   * five: 5件法
   * choice: 選択肢
   */
  questionType: "yesno" | "five" | "choice";
  /** 選択肢での回答リスト */
  answers?:
    | {
        /** 一意な管理番号 */
        id: number;
        /** 選択肢 */
        text: string;
      }[]
    | undefined;
};

/** Question and answer */
export type QuestionResult = {
  questionId: string;
  answer: number;
};

/** 画像の表示に必要な情報をまとめたもの */
export type Image = {
  src: string;
  width: number;
  height: number;
};
