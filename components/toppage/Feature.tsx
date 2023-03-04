import { css, Theme } from "@emotion/react";

type FeatureProps = {
  title: string;
  description: string;
  featureContentNode: React.ReactNode;
  inverse?: boolean;
};

const baseInverse = css`
  flex-direction: row-reverse;
`;

const base = (inverse: boolean) => css`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8rem;
  justify-content: center;
  padding: 0 3.2rem;
  ${inverse ? baseInverse : ""}
`;

const featureTextAreaStyle = css`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 48rem;
  max-width: 48rem;
  margin-bottom: 4.8rem;
`;

const featureTitleStyle = (theme: Theme) => css`
  margin: 0;
  margin-bottom: 1.6rem;
  font-size: 4.8rem;
  font-weight: bold;
  color: ${theme.colors.normalTextColor};
  word-break: keep-all;
  overflow-wrap: anywhere;

  @media screen and (max-width: 1080px) {
    font-size: 4rem;
    text-align: center;
  }
`;

const featureDescriptionStyle = (theme: Theme) => css`
  margin: 0;
  font-family: GenShinGothic-P, sans-serif;
  font-size: 3.2rem;
  color: ${theme.colors.normalTextColor};

  @media screen and (max-width: 1080px) {
    font-size: 2.8rem;
    text-align: center;
  }
`;

const featureContentAreaStyle = css`
  width: 48rem;
  max-width: 48rem;
`;

export default function Feature({
  title,
  description,
  featureContentNode,
  inverse = false,
}: FeatureProps) {
  return (
    <div css={base(inverse)}>
      <div css={featureTextAreaStyle}>
        <p css={featureTitleStyle}>
          {title}
          <wbr />
          とは
        </p>
        <p css={featureDescriptionStyle}>{description}</p>
      </div>
      <div css={featureContentAreaStyle}>{featureContentNode}</div>
    </div>
  );
}
