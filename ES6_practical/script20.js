function getState(promise) {
  return new Promise((resolve) => {
    promise.then(() => resolve("fulfilled"));
    promise.catch(() => resolve("rejected"));
    queueMicrotask(() => resolve("pending"));
  });
}
