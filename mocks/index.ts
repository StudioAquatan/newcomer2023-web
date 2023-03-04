import { setupWorker } from "msw";
import { setupServer } from "msw/node";
import { defaultHandlers } from "./handlers";

export const initMocks = () => {
  if (typeof window == "undefined") {
    setupServer(...defaultHandlers).listen();
    console.log("[MSW] Init Mock Server");
  } else {
    void setupWorker(...defaultHandlers).start();
    console.log("[MSW] Init Mock Worker");
  }
}
