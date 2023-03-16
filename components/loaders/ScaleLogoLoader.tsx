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
`;

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
    /* opacity: 1; */
  }

  50% {
    transform: scale(1.5);
    /* opacity: 0.5; */
  }

  100% {
    transform: scale(1);
    /* opacity: 1; */
  }
`;

const logo = css`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  background-color: transparent;
  animation: ${scaleAnimation} 1s ease-in-out infinite;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }

  &:nth-child(4) {
    animation-delay: 0.6s;
  }

  &:nth-child(5) {
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

export default function ScaleLogoLoader({
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
        <Aquatan />
      </div>
      <p css={loaderLabel}>{label}</p>
    </div>
  );
}
