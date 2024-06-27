// As you know, a promise is in one of these states: pending, fulfilled, rejected.
// Implement the async function getState that determines a state of a promise.
function getState(promise) {
  return new Promise((resolve) => {
    promise.then(() => resolve("fulfilled"));
    promise.catch(() => resolve("rejected"));
    queueMicrotask(() => resolve("pending"));
  });
}
