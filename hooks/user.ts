import useSWR from "swr";
import { apiClient } from "../api-client/apiClient";

export default function useUser() {
  return useSWR(
    null,
    async () => {
      const userToken = localStorage.getItem("userToken") ?? null;
      const userInfo = localStorage.getItem("userInfo") ?? null;

      if (userToken && userInfo) {
        // 既にユーザ作成済みなので、APIを叩かずにローカルストレージから取得
        const userInfoJson = JSON.parse(userInfo);
        return { token: userToken, user: userInfoJson };
      } else {
        // APIを叩いてユーザを作成して、以降はローカルストレージから取得
        const res = await apiClient.user.$post().then((res) => {
          localStorage.setItem("userToken", res.token ?? "");
          localStorage.setItem("userInfo", JSON.stringify(res.user) ?? "");
          return res;
        });

        return res;
      }
    },
    { revalidateOnFocus: false }
  );
}
