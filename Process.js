const { fork } = require("child_process");

console.log("Parent Process ID:", process.pid);

const child = fork("./worker.js");

child.on("message", (message) => {
  console.log("Message from child:", message);
});
