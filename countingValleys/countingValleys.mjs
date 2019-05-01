function countingValleys(s) {
  let level = 0;
  let valley = 0
    for (let l of s) {
      if (l == 'U') {
        level ++;
        if (level == 0) {
          valley ++;
        }
      } else {
        level --;
      }
    } return valley
}

export { countingValleys };
