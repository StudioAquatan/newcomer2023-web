import { MockedRequest, ResponseResolver, restContext } from "msw";

export const recommendationGetSuccessResponseJson = {
  recommendation: {
    orgs: [
      {
        org: {
          id: "0",
          fullName: "Organaization 0",
          shortName: "string",
          shortDescription: "string",
          logo: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampBackground: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampColor: "string",
          altLogo: "string",
          description: "string",
          location: "string",
          fees: "string",
          activeDays: "string",
          links: ["string"],
        },
        coefficient: 0,
        isVisited: true,
        isExcluded: true,
        stampSlot: -1,
      },
      {
        org: {
          id: "1",
          fullName: "Organaization 1",
          shortName: "string",
          shortDescription: "string",
          logo: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampBackground: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampColor: "string",
          altLogo: "string",
          description: "string",
          location: "string",
          fees: "string",
          activeDays: "string",
          links: ["string"],
        },
        coefficient: 0,
        isVisited: true,
        isExcluded: true,
        stampSlot: -1,
      },
      {
        org: {
          id: "2",
          fullName: "Organaization 2",
          shortName: "string",
          shortDescription: "string",
          logo: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampBackground: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampColor: "string",
          altLogo: "string",
          description: "string",
          location: "string",
          fees: "string",
          activeDays: "string",
          links: ["string"],
        },
        coefficient: 0,
        isVisited: true,
        isExcluded: true,
        stampSlot: -1,
      },
      {
        org: {
          id: "3",
          fullName: "Organaization 3",
          shortName: "string",
          shortDescription: "string",
          logo: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampBackground: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampColor: "string",
          altLogo: "string",
          description: "string",
          location: "string",
          fees: "string",
          activeDays: "string",
          links: ["string"],
        },
        coefficient: 0,
        isVisited: true,
        isExcluded: true,
        stampSlot: -1,
      },
      {
        org: {
          id: "4",
          fullName: "Organaization 4",
          shortName: "string",
          shortDescription: "string",
          logo: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampBackground: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampColor: "string",
          altLogo: "string",
          description: "string",
          location: "string",
          fees: "string",
          activeDays: "string",
          links: ["string"],
        },
        coefficient: 0,
        isVisited: true,
        isExcluded: true,
        stampSlot: -1,
      },
      {
        org: {
          id: "5",
          fullName: "Organaization 5",
          shortName: "string",
          shortDescription: "string",
          logo: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampBackground: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampColor: "string",
          altLogo: "string",
          description: "string",
          location: "string",
          fees: "string",
          activeDays: "string",
          links: ["string"],
        },
        coefficient: 0,
        isVisited: true,
        isExcluded: true,
        stampSlot: -1,
      },
      {
        org: {
          id: "6",
          fullName: "Organaization 6",
          shortName: "string",
          shortDescription: "string",
          logo: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampBackground: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampColor: "string",
          altLogo: "string",
          description: "string",
          location: "string",
          fees: "string",
          activeDays: "string",
          links: ["string"],
        },
        coefficient: 0,
        isVisited: true,
        isExcluded: true,
        stampSlot: -1,
      },
      {
        org: {
          id: "7",
          fullName: "Organaization 7",
          shortName: "string",
          shortDescription: "string",
          logo: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampBackground: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampColor: "string",
          altLogo: "string",
          description: "string",
          location: "string",
          fees: "string",
          activeDays: "string",
          links: ["string"],
        },
        coefficient: 0,
        isVisited: true,
        isExcluded: true,
        stampSlot: -1,
      },
      {
        org: {
          id: "8",
          fullName: "Organaization 8",
          shortName: "string",
          shortDescription: "string",
          logo: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampBackground: {
            src: "/org_icons/default.png",
            width: 0,
            height: 0,
          },
          stampColor: "string",
          altLogo: "string",
          description: "string",
          location: "string",
          fees: "string",
          activeDays: "string",
          links: ["string"],
        },
        coefficient: 0,
        isVisited: true,
        isExcluded: true,
        stampSlot: -1,
      },
    ],
    ignoreRemains: 5,
    renewRemains: 5,
  },
  questions: [
    {
      questionId: "string",
      answer: 0,
    },
  ],
};

export const mockRecommendationGetSuccess: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(recommendationGetSuccessResponseJson));
};

export const mockRecommendationPostInvalid: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) => {
  return res(ctx.status(400));
};

export const mockRecommendationPutSuccess: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(recommendationGetSuccessResponseJson));
};

export const mockRecommendationPutInvalid: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) => {
  return res(ctx.status(400));
};
