// Generators can be used to wonderful things. You can use them for numerous things, but here is one specific
// example. You are studying for a test so you must practice your multiplication, but you don't have a multiplication
// table showing the different examples. You have decided to create a generator that prints out a limitless list of time tables.
export function* generator(a: number): Generator<string> {
  let i: number = 1;

  while (true) {
    let result: number = a * i;

    yield `${a} x ${i} = ${result}`;

    i += 1;
  }
}
