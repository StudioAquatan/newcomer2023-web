import { css, keyframes } from "@emotion/react";
import Image from "next/image";
import imgixLoader from "../../image-loader";

const container = (pageMode: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${pageMode ? "100svh" : "100%"};
`;

const loader = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;

const jumpingAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-30px);
  }
`;

const logo = css`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  background-color: transparent;
  animation: ${jumpingAnimation} 1s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }

  &:nth-child(2) {
    animation-delay: 0.4s;
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
  }

  &:nth-child(4) {
    animation-delay: 0.8s;
  }
`;

const loaderLabel = css`
  padding: 0;
  margin: 0;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  text-align: center;
`;

const Irodukun = () => {
  return (
    <Image
      src="/org_icons/irodori_logo.png"
      alt="irodori"
      width={64}
      height={64}
      css={logo}
      loader={imgixLoader}
    />
  );
};

const Aquatan = () => {
  return (
    <Image
      src="/org_icons/aquatan-black.png"
      alt="あくあたん工房"
      width={64}
      height={64}
      css={logo}
      loader={imgixLoader}
    />
  );
};

export default function JumpingLogoLoader({
  label,
  pageMode = false,
}: {
  label: string;
  pageMode?: boolean;
}) {
  return (
    <div css={container(pageMode)}>
      <div css={loader}>
        <Aquatan />
        <Irodukun />
        <Aquatan />
        <Irodukun />
      </div>
      <p css={loaderLabel}>{label}</p>
    </div>
  );
}
