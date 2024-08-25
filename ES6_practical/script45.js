function isAlt(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  const isVowel = (char) => vowels.includes(char.toLowerCase());
  for (let i = 1; i < word.length; i++) {
    if (isVowel(word[i]) === isVowel(word[i - 1])) {
      return false;
    }
  }
  return true;
}
