import { MockedRequest, ResponseResolver, restContext } from "msw";

const questions = [
  {
    id: "1",
    questionText: "Question 1",
    questionType: "five",
  },
  {
    id: "2",
    questionText: "Question 2",
    questionType: "five",
  },
  {
    id: "3",
    questionText: "Question 3",
    questionType: "five",
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
  return res(ctx.status(200), ctx.json(questions));
};
