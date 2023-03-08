import { MockedRequest, ResponseResolver, restContext } from "msw";
import { Question } from "../../api-client/@types";

export const questionsGetSuccessResponseJson: Question[] = [
  {
    id: "1",
    questionText: "あなたの課程は？",
    questionType: "choice",
    answers: [
      {
        id: 1,
        text: "応用生物学課程",
      },
      {
        id: 2,
        text: "応用化学課程",
      },
      {
        id: 3,
        text: "生体分子応用化学課程",
      },
      {
        id: 4,
        text: "高分子機能工学課程",
      },
      {
        id: 5,
        text: "物質工学課程",
      },
      {
        id: 6,
        text: "電子システム工学課程",
      },
      {
        id: 7,
        text: "情報工学課程",
      },
      {
        id: 8,
        text: "機械工学課程",
      },
      {
        id: 9,
        text: "デザイン・建築学課程",
      },
    ],
  },
  {
    id: "2",
    questionText: "あなたはデザイン・建築学課程ですか？",
    questionType: "yesno",
  },
  {
    id: "3",
    questionText: "あなたの性別は？",
    questionType: "choice",
    answers: [
      {
        id: 1,
        text: "男性",
      },
      {
        id: 2,
        text: "女性",
      },
    ],
  },
  {
    id: "4",
    questionText: "Question 4",
    questionType: "five",
  },
  {
    id: "5",
    questionText: "Question 5",
    questionType: "five",
  },
  {
    id: "6",
    questionText: "Question 6",
    questionType: "five",
  },
  {
    id: "7",
    questionText: "Question 7",
    questionType: "five",
  },
  {
    id: "8",
    questionText: "Question 8",
    questionType: "five",
  },
];

export const mockQuestionsGetSuccess: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(questionsGetSuccessResponseJson));
};
