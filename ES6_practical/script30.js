function friend(friends) {
  const res = [];

  for (let i of friends) {
    if (i.length === 4) res.push(i);
  }

  return res;
}
