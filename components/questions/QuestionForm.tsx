import {
  Question as QuestionType,
  QuestionResult,
} from "../../api-client/@types";
import OneQuestion from "./OneQuestion";

type QuestionFormProps = {
  questions: QuestionType[];
};

export default function QuestionForm({ questions }: QuestionFormProps) {
  const answers = new Map<string, QuestionResult>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(answers);
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
