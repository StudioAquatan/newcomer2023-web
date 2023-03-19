import { css } from "@emotion/react";
import { Question } from "../../api-client/@types";
import OneQuestion from "../questions/OneQuestion";
import Feature from "./Feature";

type FeatureDiagnoseProps = {
  title: string;
  description: string | React.ReactNode;
  inverse?: boolean;
  questions: Question[];
};

const container = css`
  background-color: #fff;
  border: 3px solid #ffc8df;
  border-radius: 1.6rem;
`;

const questionPadding = css`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2rem;
`;

export default function FeatureDiagnose({
  title,
  description,
  inverse = false,
  questions,
}: FeatureDiagnoseProps) {
  const featureContentNode = (
    <div css={container}>
      <div css={questionPadding}>
        {questions.map((question, index) => (
          <OneQuestion key={index} question={question} />
        ))}
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
