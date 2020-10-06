function numSum(n) {
  let total = 0;
  for (let x = 1; x <= n; x++) {
    total += x;
  }
  return total;
}
numSum([100]);
