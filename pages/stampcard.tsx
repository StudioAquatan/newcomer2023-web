import { css } from "@emotion/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GlowingPinkButton from "../components/buttons/GlowingPinkButton";
import StampCard, { StampCardProps } from "../components/stampcard/StampCard";

const card: StampCardProps = {
  userId: 0,
  stamps: [
    {
      clubName: "Club 1",
      backgroundColor: "#00FF00",
    },
    {
      clubName: "Club 2",
      backgroundColor: "#FF0000",
    },
    {
      clubName: "Club 3",
      backgroundColor: "#00FF00",
    },
    {
      clubName: "Club 4",
      backgroundColor: "#FF0000",
    },
    {
      clubName: "Club 5",
      backgroundColor: "#00FF00",
    },
    {
      clubName: "Club 6",
      backgroundColor: "#FF0000",
    },
    {
      clubName: "Club 7",
      backgroundColor: "#00FF00",
      visited: true,
    },
    {
      clubName: "Club 8",
      backgroundColor: "#FF0000",
      visited: true,
    },
    {
      clubName: "Club 9",
      backgroundColor: "#00FF00",
      visited: true,
    },
  ],
};

type StampCardPageProps = StampCardProps;

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
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
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  justify-content: center;
  margin: 0 3.2rem;
`;

const otherClubs = css`
  padding: 0;
  margin: 0;
  font-size: 2rem;
  text-align: center;
`;

export default function StampCardPage(props: StampCardPageProps) {
  return (
    <div css={container}>
      <div css={stampCardHeader}>
        <p css={stampCardTitle}>スタンプラリー</p>
        <p css={stampCardDescription}>ブースを回ってスタンプを集めよう！</p>
      </div>
      <div css={stampCardContainer}>
        <StampCard {...props} />
      </div>
      <div css={stampCardBottom}>
        <GlowingPinkButton text="シェアしてみよう!" href="/" />
        <p css={otherClubs}>
          他の部活を見る
          <br />
          <FontAwesomeIcon icon={faChevronDown} />
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      ...card,
    },
  };
}
