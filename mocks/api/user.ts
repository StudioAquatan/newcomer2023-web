import { MockedRequest, ResponseResolver, restContext } from "msw";

export const mockUserPostSuccess: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      nickname: "Test User",
      createdAt: "2021-01-01T00:00:00.000Z",
    })
  );
};

export const mockUserPostInvalid: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) => {
  return res(ctx.status(400));
};
