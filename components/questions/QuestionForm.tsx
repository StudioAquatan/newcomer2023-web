import { Question as QuestionType } from "../../api-client/@types";
import { useAnswers } from "../../store/questions";
import OneQuestion from "./OneQuestion";

type QuestionFormProps = {
  questions: QuestionType[];
};

export default function QuestionForm({ questions }: QuestionFormProps) {
  const { answers } = useAnswers();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <OneQuestion key={index} question={question} />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
