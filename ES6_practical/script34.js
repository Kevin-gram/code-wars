//Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  let stringNum = String(num).split("");
  let reverse = stringNum.reverse().join("");
  let numWithZeroes = [];
  for (let i = 0; i < reverse.length; i++) {
    numWithZeroes.push(reverse[i] + "0".repeat(i));
  }
  return numWithZeroes
    .filter((item) => Number(item[0] != "0"))
    .reverse()
    .join(" + ");
}
