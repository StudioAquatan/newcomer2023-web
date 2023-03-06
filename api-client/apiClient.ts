import aspida from "@aspida/fetch";
import { stringify } from "qs";
import api from "./$api";

export const apiClient = api(
  aspida((...args) => fetch(...args), {
    baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4010",
    throwHttpErrors: true,
    paramsSerializer: (s) => stringify(s, { arrayFormat: "brackets" }),
  })
);
