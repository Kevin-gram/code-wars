// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
function order(words) {
  let finalRes = [];
  let allNumbers = [];
  let arrayOfWords = words.split(" ");

  for (let i of arrayOfWords) {
    for (let char of i) {
      if (!isNaN(parseInt(char))) {
        allNumbers.push(char);
      }
    }
  }

  let numbers = allNumbers
    .map((element) => parseInt(element))
    .sort((a, b) => a - b);

  for (let num of numbers) {
    for (let letters of arrayOfWords) {
      if (letters.includes(num.toString())) {
        finalRes.push(letters);
      }
    }
  }

  return finalRes.join(" ");
}
