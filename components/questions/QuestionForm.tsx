import { useRouter } from "next/router";
import {
  Question as QuestionType,
  QuestionResult,
} from "../../api-client/@types";
import { apiClient } from "../../api-client/apiClient";
import useUser from "../../hooks/user";
import OneQuestion from "./OneQuestion";

type QuestionFormProps = {
  questions: QuestionType[];
};

const putRecommendation = async (token: string, answers: QuestionResult[]) => {
  return await apiClient.recommendation.put({
    body: answers,
    config: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
};

export default function QuestionForm({ questions }: QuestionFormProps) {
  const router = useRouter();
  const { data: userData } = useUser();
  if (!userData) {
    return <div>Loading...</div>;
  }

  const answers = new Map<string, QuestionResult>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await putRecommendation(
      userData.token,
      Array.from(answers.values())
    );
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
      {questions.map((question, index) => {
        return (
          <OneQuestion key={index} question={question} onChange={onChange} />
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
}
