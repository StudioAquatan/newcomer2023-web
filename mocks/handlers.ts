import { rest } from "msw";
import { mockOrgsPostSuccess, mockOrgsPostInvalid } from "./api/orgs";
import { mockUserPostInvalid, mockUserPostSuccess } from "./api/user";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4041";

export const handlers = {
  userPost: {
    success: rest.post(API_URL + "/user", mockUserPostSuccess),
    invalid: rest.post(API_URL + "/user", mockUserPostInvalid),
  },
  orgsPost: {
    success: rest.get(API_URL + "/orgs", mockOrgsPostSuccess),
    invalid: rest.get(API_URL + "/orgs", mockOrgsPostInvalid),
  },
};

export const defaultHandlers = Object.entries(handlers).map(
  ([, statusHandlers]) => {
    return statusHandlers.success;
  }
);
