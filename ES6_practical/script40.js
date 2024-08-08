function doubleEveryOther(a) {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    i != 0 && i % 2 === 1 ? res.push(a[i] * 2) : res.push(a[i]);
  }
  return res;
}
