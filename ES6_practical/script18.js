function highestScoringWord(string) {
  const words = string.split(" ");
  function calculateScore(word) {
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      score += word.charCodeAt(i) - "a".charCodeAt(0) + 1;
    }
    return score;
  }
  let highestScore = 0;
  let highestWord = "";
  words.forEach((word) => {
    const score = calculateScore(word);
    if (
      score > highestScore ||
      (score === highestScore && highestWord === "")
    ) {
      highestScore = score;
      highestWord = word;
    }
  });
  return highestWord;
}
