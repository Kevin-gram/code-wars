function stringExpansion(s) {
  let newS = "";
  let repeatCount = 1;

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i]) && s[i] !== " ") {
      repeatCount = Number(s[i]);
    } else {
      newS += s[i].repeat(repeatCount);
    }
  }
  return newS;
}
