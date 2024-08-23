function reverseVowels(str) {
  const vowels = ["a", "i", "u", "o", "e"];
  const myvows = str
    .split("")
    .filter((character) => vowels.includes(character.toLowerCase()))
    .reverse();
  const x = str.split("").map((element, index) => {
    return vowels.includes(element.toLowerCase())
      ? (element = myvows.shift())
      : element;
  });
  return x.join("");
}
// reversing the vowels within one string
