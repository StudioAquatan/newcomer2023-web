import { useState } from "react";
import { Question } from "../api/@types";
import { apiClient } from "../api/apiClient";
import ProgressBar from "../components/questions/ProgressBar";

type DiagnoseProps = {
  questions: Array<Question>;
  initialCurrent: number;
};

export default function Diagnose({ questions, initialCurrent }: DiagnoseProps) {
  const [current] = useState(initialCurrent);
  return (
    <div>
      <ProgressBar progress={current / questions.length} />
    </div>
  );
}

export async function getServerSideProps() {
  const questions = await apiClient.questions
    .$get()
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
      return [
        {
          id: "999",
          questionText: "Fetch Error: Question Not Found",
          questionType: "five",
        },
      ];
    });

  return {
    props: {
      questions: questions,
      initialCurrent: 0,
    },
  };
}
