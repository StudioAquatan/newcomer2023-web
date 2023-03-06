import { Question as QuestionType } from "../../api-client/@types";
import OneQuestion from "./OneQuestion";

type QuestionFormProps = {
  questions: QuestionType[];
};

export default function QuestionForm({ questions }: QuestionFormProps) {
  return (
    <form>
      {questions.map((question, index) => (
        <OneQuestion key={index} question={question} />
      ))}
    </form>
  );
}
