async function initMocks() {
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen();
    console.log("[MSW] Init Mock Server");
  } else {
    const { worker } = await import("./browser");
    worker.start();
    console.log("[MSW] Init Mock Worker");
  }
}

initMocks();

export {};
