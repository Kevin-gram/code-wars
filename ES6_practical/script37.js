// Given a string that includes alphanumeric characters ("3a4B2d") return the expansion of that string: The numeric values represent the occurrence of each letter preceding that numeric value.
// There should be no numeric characters in the final string.
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
