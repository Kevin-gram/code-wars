function proofread(str) {
  let newStr = str.split(" ").map((ele) => ele.toLowerCase());
  let finalStr = [];
  let final = 0;

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].includes("ie")) {
      finalStr.push(newStr[i].replace(/ie/g, "ei"));
    } else {
      finalStr.push(newStr[i]);
    }
  }

  final = finalStr.join(" ").split(". ");
  return final
    .map((ele) => ele.slice(0, 1).toUpperCase() + ele.slice(1))
    .join(". ");
}
