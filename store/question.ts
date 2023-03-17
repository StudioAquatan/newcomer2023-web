import { atom, PrimitiveAtom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { atomFamily } from "jotai/utils";
import React from "react";
import { Question, QuestionResult } from "../api-client/@types";
import Random, { shuffle } from "../components/random";

const questionsAtom = atom<Question[]>([]);
const eachAnswerAtom = atomFamily<string, PrimitiveAtom<number>>(() =>
  atom(-1)
);
const combinedAnswersAtom = atom(
  (get) => {
    const questions = get(questionsAtom);
    const answers = new Map(
      questions
        .map(({ id }): [string, QuestionResult] => {
          const answer = get(eachAnswerAtom(id));
          return [id, { questionId: id, answer }];
        })
        .filter(([, { answer }]) => answer >= 0)
    );

    return answers;
  },
  (get, set, num: number) => {
    const questions = get(questionsAtom);
    questions.forEach(({ id }, index) => {
      if (index === num || num < 0) set(eachAnswerAtom(id), -1);
    });
  }
);
const currentQuestionAtom = atom(0);
const isAnswerReadyAtom = atom((get) => {
  const questions = get(questionsAtom);
  const current = get(currentQuestionAtom);

  const last = questions.length - 1;

  if (last < 0) return false;

  return last == current && get(eachAnswerAtom(questions[last].id)) >= 0;
});
const transitionAtom = atom(false);

export function useQuestionListSetter(list: Question[]) {
  const [questions, setQuestions] = useAtom(questionsAtom);
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
    const randomQuestions = Object.keys(mapBySort)
      .map((sortKey) => {
        return shuffle(mapBySort[sortKey], random.next())[0];
      })
      .sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0));
    setQuestions(randomQuestions);
  }, [list, setQuestions]);

  return questions.length > 0;
}

export function useQuestionList() {
  return useAtomValue(questionsAtom);
}

export function useAnswer(questionId: string) {
  return useAtom(eachAnswerAtom(questionId));
}

export function useQuestionResultMap() {
  return useAtomValue(combinedAnswersAtom);
}

export function useCurrentQuestion() {
  const [current, setCurrent] = useAtom(currentQuestionAtom);
  const questions = useAtomValue(questionsAtom);
  const clearQuestion = useSetAtom(combinedAnswersAtom);
  const [isInTransition, setTransition] = useAtom(transitionAtom);

  const isLastQuestion = current === questions.length - 1;

  const next = () => {
    if (isLastQuestion) return;
    setCurrent((current) => current + 1);
  };
  const back = () => {
    if (current > 0) {
      clearQuestion(current);
      clearQuestion(current - 1);
      setCurrent((current) => current - 1);
    }
  };
  return {
    current,
    question: (questions[current] ?? null) as Question | null,
    total: questions.length,
    isLastQuestion,
    isInTransition,
    next,
    back,
    // TODO きたない
    nextWithTransition() {
      if (isLastQuestion) return;

      setTimeout(() => {
        setTransition(true);
      }, 50);
      setTimeout(() => {
        next();
        setTransition(false);
      }, 600);
    },
    backWithTransition() {
      if (current === 0) return;

      // 先に消しておく -> 最終質問でボタンがバグらない
      clearQuestion(current);

      setTimeout(() => {
        setTransition(true);
      }, 50);
      setTimeout(() => {
        back();
        setTransition(false);
      }, 600);
    },
  };
}

export function useIsAnswerReady() {
  return useAtomValue(isAnswerReadyAtom);
}

export function useQuestionReset() {
  const setCurrent = useSetAtom(currentQuestionAtom);
  const clearQuestion = useSetAtom(combinedAnswersAtom);
  return () => {
    setCurrent(0);
    clearQuestion(-1);
  };
}
