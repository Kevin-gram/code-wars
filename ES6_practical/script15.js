// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.
function divCon(x) {
  let nums = 0;
  let str = 0;
  for (let i of x) {
    if (typeof i === "number") {
      nums += i;
    } else {
      str += parseInt(i);
    }
  }
  return nums - str;
}
const x = [9, 3, "7", "3"];
console.log(divCon(x));
