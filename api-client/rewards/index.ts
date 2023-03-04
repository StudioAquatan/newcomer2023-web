/* eslint-disable */
export type Methods = {
  /** 景品交換の状態を取得します．景品交換ができるかどうかも同時に取得できます． */
  get: {
    status: 200;

    /** OK */
    resBody: {
      /** 景品交換済みか */
      obtained: boolean;
      /** 景品交換ができるか */
      available: boolean;
      /** 景品交換ができない理由 */
      unavailableReason?: string | undefined;
    };
  };

  put: {
    status: 200;
  };
};
