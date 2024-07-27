function openOrSenior(data) {
  const res = [];
  for (let element of data) {
    element[0] >= 55 && element[1] > 7 ? res.push("Senior") : res.push("Open");
  }
  return res;
}
