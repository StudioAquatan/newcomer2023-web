import { css, useTheme } from "@emotion/react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons/faShareNodes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useInView } from "react-intersection-observer";
import { OrganizationFull } from "../../api-client/@types";
import MetaHead from "../../components/MetaHead";
import ColorBorderButton from "../../components/buttons/ColorBorderButton";
import Header from "../../components/headers/Header";
import JumpingLogoLoader from "../../components/loaders/JumpingLogoLoader";
import StampCard, { StampCardProps } from "../../components/stampcard/Card";
import { StampProps } from "../../components/stampcard/Stamp";
import { BalloonContainer } from "../../components/tutorial/Balloon";
import useStampCardSeed from "../../hooks/cardSeed";
import { useOrganizations } from "../../hooks/organizations";
import {
  NoRecommendation,
  useRecommendation,
} from "../../hooks/recommendation";
import useUser from "../../hooks/user";
import { useStampcardTutorial } from "../../store/tutorial";
import { useIsMobile } from "../../store/userAgent";

const SELF_URL = process.env.NEXT_PUBLIC_PUBLIC_DOMAIN
  ? `https://${process.env.NEXT_PUBLIC_PUBLIC_DOMAIN}`
  : "http://localhost:3000";

const headerPadding = css`
  height: 2rem;
`;

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const content = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: calc(100svh - 2rem);
`;

const stampCardHeader = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3.2rem;
`;

const stampCardTitle = css`
  padding: 0;
  margin: 1rem 0;
  font-size: 4rem;
`;

const stampCardDescription = css`
  padding: 0;
  margin: 0;
  font-size: 2.8rem;
  text-align: center;
`;

const stampCardContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const stampCardBottom = css`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 3.2rem;
`;

const stampGuideButton = css`
  padding: 1.6rem;
`;
const otherLinks = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 2rem;
  text-align: center;
`;

const linkStyle = css`
  width: 80vw;
  padding: 1rem 0;
  color: rgba(0 0 0 / 95%);
`;

const locationLinkStyle = css`
  width: 100%;
  padding: 0.8rem 0;
  color: rgba(0 0 0 / 95%);
`;

const iconMargin = css`
  margin-left: 1rem;
`;

const fallbackOrg: OrganizationFull = {
  id: "fallback",
  fullName: "",
  shortName: "",
  shortDescription: "",
  description: "",
};

export default function StampCardPage() {
  const theme = useTheme();
  const { isMobile } = useIsMobile();
  const { data: userData } = useUser();
  const { data: orgsData } = useOrganizations();
  const { data: recommendationData } = useRecommendation();
  const { data: seedData } = useStampCardSeed();
  const FALLBACKSEED = 0;
  const seed = seedData?.seed ?? FALLBACKSEED;
  const { push } = useRouter();

  React.useEffect(() => {
    if (recommendationData === NoRecommendation) {
      push("/");
    }
  }, [recommendationData, push]);

  const { done, close } = useStampcardTutorial();

  const { ref, inView } = useInView();
  React.useEffect(() => {
    if (inView) {
      setTimeout(() => {
        close();
      }, 5000);
    }
  }, [close, inView]);

  if (!recommendationData || !orgsData) {
    return (
      <>
        <MetaHead
          title="あなたのスタンプカード"
          description="スタンプカードをもって部活動紹介を回ろう"
        />
        <JumpingLogoLoader label="スタンプカードを読み込み中..." pageMode />
      </>
    );
  }

  if (typeof recommendationData === "symbol") {
    return null;
  }

  const recommendation = recommendationData.recommendation;

  // TODO: 表示位置がつけられたもののみ使う
  const stamps: StampProps[] = recommendation.orgs
    .slice(0, 9)
    .map((recommendationItem, index) => {
      return {
        recommendation: recommendationItem,
        orgInfo:
          orgsData.organizationsMap.get(recommendationItem.org.id) ??
          fallbackOrg,
        seed: seed + index,
      };
    });

  const props: StampCardProps = {
    stamps: stamps,
  };

  const share = () => {
    const shareText =
      "相性診断をしてスタンプカードを作りました！みんなも診断してみてね\n#工繊53団体相性診断\n";
    const shareUrl = `${SELF_URL}?uid=${userData?.user.id}`;
    if (navigator.share) {
      navigator
        .share({
          title: "相性診断をしてスタンプカードを作りました！",
          text: shareText,
          url: shareUrl,
        })
        .catch((error) => console.log("リンクの共有に失敗しました", error));
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      // TODO
      alert("リンクをコピーしました！");
    } else {
      console.log("リンクの共有方法がありません");
      console.log("以下のリンクをコピーして共有してください");
      console.log(`${shareText}\n${shareUrl}`);
    }
  };

  return (
    <div css={container}>
      <MetaHead
        title="あなたのスタンプカード"
        description="スタンプカードをもって部活動紹介を回ろう"
      />
      <div css={headerPadding}>
        <Header isMobile={isMobile} />
      </div>
      <div css={content}>
        <div css={stampCardHeader}>
          <p css={stampCardTitle}>スタンプラリー</p>
          <p css={stampCardDescription}>説明会を回ってスタンプを集めよう！</p>
        </div>
        <div css={stampCardContainer}>
          <StampCard {...props} />
        </div>
        <div>
          <div css={stampCardBottom}>
            <ColorBorderButton
              label={<FontAwesomeIcon icon={faShareNodes} />}
              textColor={theme.colors.button.enable.backgroundColor}
              borderColor={theme.colors.button.enable.backgroundColor}
              fontSize="2.4rem"
              onClick={() => share()}
              isIcon
            />
            <Link href="/exchange">
              <ColorBorderButton
                label="景品交換の手順"
                textColor={theme.colors.button.enable.backgroundColor}
                borderColor={theme.colors.button.enable.backgroundColor}
                fontSize="2.4rem"
                css={stampGuideButton}
              />
            </Link>
          </div>
          <div css={otherLinks}>
            <a
              href="https://twitter.com/Shinkan_KIT2023/status/1642525214667051011"
              target="_blank"
              rel="noopener noreferrer"
              css={locationLinkStyle}
            >
              説明会の会場を見る
            </a>
          </div>
        </div>
      </div>
      <div css={otherLinks}>
        <Link href="/orgs" css={linkStyle}>
          他の部活を見る
          <FontAwesomeIcon icon={faChevronRight} css={iconMargin} />
        </Link>
        {recommendation.renewRemains > 0 && (
          <BalloonContainer
            direction="bottom"
            animated
            balloonContent={
              done ? null : (
                <>
                  質問は診断毎に変わるので
                  <br />
                  やり直すとより良い結果になるかも
                </>
              )
            }
          >
            <Link href="/diagnose" ref={ref} css={linkStyle}>
              診断をやり直す
            </Link>
          </BalloonContainer>
        )}
        <Link href="/stampcard/exclusion" css={linkStyle}>
          除外する団体を設定
        </Link>
      </div>
    </div>
  );
}
