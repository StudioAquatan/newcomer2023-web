import { atom, PrimitiveAtom, useAtomValue, useSetAtom } from "jotai";
import { atomFamily } from "jotai/utils";
import React from "react";
import { Question, QuestionResult } from "../api-client/@types";
import Random, { shuffle } from "../components/random";

const questionsAtom = atom<Question[]>([]);
const eachAnswerAtom = atomFamily<string, PrimitiveAtom<number>>(() => atom(0));
const combinedAnswersAtom = atom((get) => {
  const questions = get(questionsAtom);
  const answers = new Map(
    questions.map(({ id }): [string, QuestionResult] => {
      const answer = get(eachAnswerAtom(id));
      return [id, { questionId: id, answer }];
    })
  );

  return answers;
});

export function useQuestionListSetter(list: Question[]) {
  const setQuestions = useSetAtom(questionsAtom);
  React.useEffect(() => {
    // Object.keysの都合もありstringにしておく
    const mapBySort = list.reduce(
      (questionMap: Record<string, Question[]>, question) => {
        const sort = (question.sort ?? -1).toString();
        return {
          ...questionMap,
          [sort]: [question, ...(questionMap[sort] ?? [])],
        };
      },
      {}
    );

    const random = new Random();
    const randomQuestions = Object.keys(mapBySort).flatMap((sortKey) => {
      // 負数は全部出す(暫定)
      if (Number(sortKey) <= 0) {
        return mapBySort[sortKey];
      } else {
        return [shuffle(mapBySort[sortKey], random.next())[0]];
      }
    });
    setQuestions(randomQuestions);
  }, [list, setQuestions]);
}

export function useQuestionList() {
  return useAtomValue(questionsAtom);
}

export function useQuestion() {
  return "";
}
