const { Worker, isMainThread, parentPort, threadId } = require("worker_threads");

if (isMainThread) {
  console.log("Main Thread ID:", threadId);

  const worker = new Worker(__filename);

  worker.on("message", (message) => {
    console.log("Message from worker thread:", message);
  });
} else {
  console.log("Worker Thread ID:", threadId);
  parentPort.postMessage("Hello from the worker thread");
}
