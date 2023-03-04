import { setupWorker } from "msw";
import { setupServer } from "msw/node";
import { defaultHandlers } from "./handlers";

export const initMockServer = () => {
  if (typeof window === "undefined") {
    setupServer(...defaultHandlers).listen();
    console.log("[MSW] Init Mock Server");
  }
};

export const initMockWorker = () => {
  if (typeof window !== "undefined") {
    return setupWorker(...defaultHandlers).start();
  }
};
