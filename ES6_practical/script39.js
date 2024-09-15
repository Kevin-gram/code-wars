// check if the winning ticket

function bingo(ticket, win) {
  let final = 0;

  for (let subArray of ticket) {
    let string = subArray[0];
    let number = subArray[1];
    let miniWin = false;

    for (let char of string) {
      if (char.charCodeAt(0) === number) {
        miniWin = true;
      }
    }

    if (miniWin) {
      final += 1;
    }
  }

  return final >= win ? "Winner!" : "Loser!";
}
