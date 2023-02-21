import { setupWorker } from "msw";
import { defaultHandlers } from "./handlers";

export const worker = setupWorker(...defaultHandlers);
