const solution = (roman) => {
  const romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentValue = romanToInt[roman[i]];

    const nextValue = romanToInt[roman[i + 1]];

    if (nextValue > currentValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }

  return total;
};
