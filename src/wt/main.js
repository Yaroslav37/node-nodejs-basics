import { Worker } from "worker_threads";
import * as os from "os";

const performCalculations = async () => {
  const numberOfCpuCores = os.cpus().length;
  console.log(numberOfCpuCores)
  const workers = Array.from({ length: numberOfCpuCores }, (_, index) => {
    const worker = new Worker("./worker.js", { workerData: index + 10 });
    return new Promise((resolve) => {
      worker.on("message", (result) => resolve(result));
    });
  });

  const results = await Promise.all(workers);

  console.log("Results:", results);
};

await performCalculations();
