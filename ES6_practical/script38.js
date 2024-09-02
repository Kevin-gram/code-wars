// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

function getMissingElement(asend) {
  asend.sort((a, b) => a - b);

  let final = 0;

  for (let i = 0; i <= 9; i++) {
    if (!asend.includes(i)) {
      final = i;
    }
  }

  return final;
}
