export function DNAtoRNA(dna: string): string {
  let rna = "";

  for (let i of dna) {
    if (i === "T") {
      rna += "U";
    } else {
      rna += i;
    }
  }

  return rna;
}
