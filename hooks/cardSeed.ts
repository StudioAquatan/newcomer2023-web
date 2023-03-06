import useSWR from "swr";
import Random from "../components/random";

export default function useStampCardSeed() {
  return useSWR(
    "/stampCardSeed",
    async () => {
      const seed = localStorage.getItem("seed") ?? null;

      if (seed) {
        return { seed: +seed }; // 文字列から数値に変換
      } else {
        const random = new Random();
        const seed = random.next();

        return { seed: seed };
      }
    },
    { revalidateOnFocus: false }
  );
}
