import { useAtomValue, useSetAtom } from "jotai";
import { atomWithReset, useResetAtom } from "jotai/utils";

const errorAtom = atomWithReset<Error | null>(null);

export default function useWrapError() {
  const setError = useSetAtom(errorAtom);
  return async <T>(promise: Promise<T>): Promise<T | null> => {
    return promise.catch((err) => {
      // TODO: 性善説…
      setError(err);
      return null;
    });
  };
}

export function useError() {
  return {
    error: useAtomValue(errorAtom),
    reset: useResetAtom(errorAtom),
    set: useSetAtom(errorAtom),
  };
}
