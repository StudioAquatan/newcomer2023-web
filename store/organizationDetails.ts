import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { atomWithReset, useResetAtom } from "jotai/utils";
import React from "react";
import { ResourceBucketItem } from "../api/resource-bucket";
import { useIsMobile } from "./userAgent";

// 動画ページ→動画に合わせてページ遷移
// その他→一定時間

// jotaiに時間周りを入れる？？
// 時間周りはProgress周辺でやりたい

export interface PageInfo {
  autoNextTimer: boolean;
  isMovie: boolean;
}

const pageListAtom = atom<PageInfo[]>([]);
const activePageAtom = atomWithReset<number>(0);
const activeProgressAtom = atomWithReset<number>(0);
const isEndAtom = atomWithReset<boolean>(false);
const pausedAtom = atom<boolean>(false);

const movieMutedAtom = atomWithReset<boolean>(true);

// 最上位コンポーネントで動かす予定のものなのでre-renderしないように設計
// 値を何も見ていない
// なおSSRでページ数がないといけないのと，現在ページが割と色々必要なので返す
export function useDetailsPages(orgImages: ResourceBucketItem[]) {
  const setPageList = useSetAtom(pageListAtom);
  const resetActivePage = useResetAtom(activePageAtom);
  const resetActiveProgress = useResetAtom(activeProgressAtom);
  const resetIsEnd = useResetAtom(isEndAtom);
  const currentPage = useAtomValue(activePageAtom);
  // PC/スマホ判定
  const { isMobile } = useIsMobile();

  // ページ情報はuseEffectで反映
  React.useEffect(() => {
    setPageList([
      { autoNextTimer: isMobile, isMovie: false }, // 概要1
      { autoNextTimer: isMobile, isMovie: false }, // 概要2
      ...orgImages.map(({ isMovie }) => ({
        autoNextTimer: !isMovie,
        isMovie,
      })), // 残り
    ]);
    // 変更が生じたら1からやる
    resetActivePage();
    resetActiveProgress();
    resetIsEnd();
  }, [
    orgImages,
    resetActivePage,
    resetActiveProgress,
    resetIsEnd,
    setPageList,
    isMobile,
  ]);

  return {
    numPages: orgImages.length + 2,
    currentPage,
  };
}

// バー表示で使うものたち
export function useDetailsPager() {
  const pageList = useAtomValue(pageListAtom);
  const progress = useAtomValue(activeProgressAtom);
  const currentPage = useAtomValue(activePageAtom);
  return {
    numPages: pageList.length,
    currentPage,
    progress,
  };
}

// 左右の移動用コンポーネント向けに移動処理
export function useDetailsPageMover() {
  const pageList = useAtomValue(pageListAtom);
  const activePage = useAtomValue(activePageAtom);
  const setActivePage = useSetAtom(activePageAtom);
  const resetActiveProgress = useResetAtom(activeProgressAtom);
  const resetIsEnd = useResetAtom(isEndAtom);
  const resetMuted = useResetAtom(movieMutedAtom);

  const canMoveNext = pageList.length - 1 >= activePage + 1;
  const canMovePrev = activePage > 0;
  return {
    canMoveNext,
    moveNextPage() {
      if (canMoveNext) {
        setActivePage(activePage + 1);
        resetActiveProgress();
        resetIsEnd();
        resetMuted();
      }
    },
    canMovePrev,
    movePrevPage() {
      if (canMovePrev) {
        setActivePage(activePage - 1);
        resetActiveProgress();
        resetIsEnd();
        resetMuted();
      }
    },
  };
}

// どこか再レンダリングされにくい場所で動かす(多分ProgressContainer内部)
export function useDetailsAutoTimer() {
  const pageList = useAtomValue(pageListAtom);
  const activePage = useAtomValue(activePageAtom);
  const [progress, setProgress] = useAtom(activeProgressAtom);
  const paused = useAtomValue(pausedAtom);
  const { moveNextPage, canMoveNext } = useDetailsPageMover();
  const setIsEnd = useSetAtom(isEndAtom);

  // タイマーは当然useEffectでクライアント
  React.useEffect(() => {
    if (pageList[activePage]?.autoNextTimer && !paused) {
      // カウントダウンタイマースタート
      const now = Date.now();
      const time = 10000;
      const interval = setInterval(() => {
        // progressの値はこのコンテキストでは変わらないので
        setProgress(Math.min((Date.now() - now) / time, 1.0));
      }, 1000 / 60); // 15 sec

      return () => clearInterval(interval);
    }
  }, [pageList, activePage, setProgress, paused]);

  // progressチェック
  React.useEffect(() => {
    if (progress >= 1.0) {
      if (canMoveNext) {
        setProgress(0);
        moveNextPage();
      } else {
        setIsEnd(true);
      }
    }
  }, [canMoveNext, moveNextPage, progress, setIsEnd, setProgress]);
}

export function useDetailsIsEnd() {
  return useAtomValue(isEndAtom);
}

export function useDetailsProgress() {
  const setValue = useSetAtom(activeProgressAtom);
  return {
    set(progress: number) {
      setValue(Math.min(progress, 1));
    },
  };
}

export function useDetailsCurrentIsMovie() {
  const pageList = useAtomValue(pageListAtom);
  const activePage = useAtomValue(activePageAtom);

  return pageList[activePage]?.isMovie ?? false;
}

export function useDetailsMute() {
  const [isMute, setMute] = useAtom(movieMutedAtom);
  return {
    toggle() {
      setMute((muted) => !muted);
    },
    isMute,
  };
}

export function useDetailsMuteValue() {
  const muted = useAtomValue(movieMutedAtom);
  return muted;
}
