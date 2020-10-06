function odd() {
  let arr = [];
  while (arr < 103) {
    for (let i = 3; i <= 103; i += 2) {
      arr.push(i);
    }
    return arr;
  }
}
odd();
