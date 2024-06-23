// slicing an array of numbers to remove the last element
function withoutLast(arr) {
  const newArr = arr.slice(0, arr.length - 1);
  return newArr;
}
