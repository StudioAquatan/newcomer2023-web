import { atom, useSetAtom, useAtomValue } from "jotai";
import { QuestionResult } from "../api-client/@types";

type Answers = Map<string, QuestionResult>;

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
