import { atom, useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/router";
import React from "react";

const routerHistoryAtom = atom<string[]>([]);

export function useRouterHistory() {
  return useAtomValue(routerHistoryAtom);
}

export function useRouterHistoryRecorder() {
  const router = useRouter();
  const setRouterHistory = useSetAtom(routerHistoryAtom);

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      setRouterHistory((history) => [url, ...history]);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
