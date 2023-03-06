import { css } from "@emotion/react";
import { Question } from "../../api/@types";
import OneQuestion from "../questions/OneQuestion";
import Feature from "./Feature";

type FeatureDiagnoseProps = {
  title: string;
  description: string;
  inverse?: boolean;
  question: Question;
};

const container = css`
  background-color: #fff;
  border: 3px solid #ffc8df;
  border-radius: 1.6rem;
`;

const questionPadding = css`
  padding: 2.4rem;
`;

export default function FeatureDiagnose({
  title,
  description,
  inverse = false,
  question,
}: FeatureDiagnoseProps) {
  const featureContentNode = (
    <div css={container}>
      <div css={questionPadding}>
        <OneQuestion question={question} />
      </div>
    </div>
  );

  const featureProps = {
    title: title,
    description: description,
    featureContentNode: featureContentNode,
    inverse: inverse,
  };

  return <Feature {...featureProps} />;
}
