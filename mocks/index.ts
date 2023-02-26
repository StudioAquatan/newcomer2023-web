async function initMocks() {
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    await server.listen();
    console.log("[MSW] Init Mock Server");
  } else {
    const { worker } = await import("./browser");
    await worker.start();
    console.log("[MSW] Init Mock Worker");
  }
}

initMocks();

export {};
