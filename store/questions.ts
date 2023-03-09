import { atom, useSetAtom, useAtomValue } from "jotai";

type AnswerType = {
  id: string;
  questionType: "five" | "yesno" | "choise";
  answer: string;
};

type Answers = Map<string, AnswerType>;

const answersAtom = atom<Answers>(new Map());

export const useAnswers = () => {
  return {
    answers: useAtomValue(answersAtom),
  };
};

export const useSetAnswers = () => {
  const set = useSetAtom(answersAtom);
  return {
    setAnswers: (answers: Answers) => set(answers),
  };
};
