console.log("Child Process ID:", process.pid);

process.send("Hello from the child process");
