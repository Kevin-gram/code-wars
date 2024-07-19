// Double each character
function doubleChar(str) {
  let res = "";

  for (let char of str) {
    res += char + char;
  }

  return res;
}
