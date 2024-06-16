function twoSum(numbers, target) {
  let res = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        res.push(i);
        res.push(j);
        return res;
      }
    }
  }
  return res;
}
