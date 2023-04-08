import { useRouter } from "next/router";
import { useIsMobile } from "../../store/userAgent";
import ColorBorderButton from "../buttons/ColorBorderButton";
import {
  ExchangeDescription,
  ExchangeSection,
  ExchangeTitle,
} from "./Exchange";

export default function DiagnoseLeader() {
  const { isMobile } = useIsMobile();
  const router = useRouter();

  const onClick = () => {
    router.push("/diagnose");
  };

  return (
    <ExchangeSection>
      <ExchangeTitle>スタンプカード</ExchangeTitle>
      <ExchangeDescription>
        {!isMobile && (
          <>
            スマホからアクセスして診断しよう
            <br />
          </>
        )}
        相性診断結果から作成されたスタンプカードを持ってスタンプラリーに参加しよう！
      </ExchangeDescription>
      {isMobile ? (
        <ColorBorderButton label="診断する" onClick={() => onClick()} />
      ) : (
        <ColorBorderButton label="診断する" disabled />
      )}
    </ExchangeSection>
  );
}
