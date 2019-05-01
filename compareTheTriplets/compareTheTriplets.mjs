function compareTheTriplets(a0, a1, a2, b0, b1, b2) {
  let arr_a = [a0, a1, a2];
  let arr_b = [b0, b1, b2];
  let max_a = 0;
  let max_b = 0;
    for (let i = 0; i < arr_a.length; i++) {
      if (arr_a[i] > arr_b[i]) {
        max_a ++;
      } else if (arr_a[i] < arr_b[i]) {
        max_b ++;
      }
    } return [max_a, max_b]
}

export { compareTheTriplets };
