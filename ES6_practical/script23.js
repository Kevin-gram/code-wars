// sorting gitcode
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string
// containing up to 26 unique alphabetical characters, and returns a string containing the same
// characters in alphabetical order.
function sortGiftCode(code) {
  let arr = code.split("");
  return arr.sort().join("");
}
