function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let res_apple = apples.map(v => v + a).filter(v => v >= s & v <= t);
  let res_orange = oranges.map(v => v + b).filter(v => v >= s & v <= t);
  let res = [res_apple.length, res_orange.length];
  return res;
}

export { countApplesAndOranges };
