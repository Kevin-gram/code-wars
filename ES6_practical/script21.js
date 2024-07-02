// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.
function tailSwap(arr) {
  const [a, b] = arr;

  const [a1, a2] = a.split(":");
  const [b1, b2] = b.split(":");

  const result = [`${a1}:${b2}`, `${b1}:${a2}`];

  return result;
}
