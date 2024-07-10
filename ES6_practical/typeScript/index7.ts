export function sumDigits(n: number): number {
  let res: number = 0;

  let numberToString: string[] = String(n).split("");

  numberToString.forEach(function (element) {
    if (element === "-") {
      res += 0;
    } else {
      res += Number(element);
    }
  });

  return res;
}
