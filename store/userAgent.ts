import { atom, useSetAtom, useAtomValue } from "jotai";

const isMobileAtom = atom<boolean>(false);

export const useIsMobile = () => {
  return {
    isMobile: useAtomValue(isMobileAtom),
  };
};

export const useSetIsMobile = () => {
  const set = useSetAtom(isMobileAtom);
  return {
    setIsMobile: ({ isMobile }: { isMobile: boolean }) => set(isMobile),
  };
};
