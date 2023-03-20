import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const stampcardTutorial = atomWithStorage("stampcardTutorial_1", false);

export function useStampcardTutorial() {
  const [done, setDone] = useAtom(stampcardTutorial);
  const close = () => setDone(true);

  return {
    done,
    close,
  };
}
