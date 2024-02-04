import { workerData, parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  try {
    const result = nthFibonacci(workerData);
    const status = "resolved";
    const data = result;
    parentPort.postMessage({ status, data });
  } catch (error) {
    const status = "error";
    const data = null;
    parentPort.postMessage({ status, data });
  }
};

sendResult();
