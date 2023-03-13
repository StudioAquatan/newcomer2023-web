import { css } from "@emotion/react";
import { useRouter } from "next/router";
import {
  Question as QuestionType,
  QuestionResult,
} from "../../api-client/@types";
import { usePutRecommendation } from "../../hooks/recommendation";
import OneQuestion from "./OneQuestion";

type QuestionFormProps = {
  questions: QuestionType[];
  currentQuestion: number;
};

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function QuestionForm({
  questions,
  currentQuestion,
}: QuestionFormProps) {
  const router = useRouter();

  const answers = new Map<string, QuestionResult>();
  const putRecommendation = usePutRecommendation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await putRecommendation(answers);
    if (res.status == 200) {
      // 正しく診断を終えたらスタンプカードに遷移する
      router.push("/stampcard");
    }
    // TODO: それ以外のときのエラーハンドリングをいい感じにする
    else if (res.status == 400) {
      throw new Error("質問が不足している場合など");
    } else if (res.status == 401) {
      throw new Error("Unauthorized");
    } else if (res.status == 429) {
      throw new Error("再診断の残り回数が0になった");
    }
  };

  const onChange = (questionId: string, answerId: number) => {
    answers.set(questionId, { questionId: questionId, answer: answerId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div css={container}>
        <OneQuestion
          question={questions[currentQuestion]}
          onChange={onChange}
        />
      </div>
    </form>
  );
}
