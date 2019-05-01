function hackerrankInString(s) {
  let original = 'hackerrank';
  let index = 0;
  let replica = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] == original[index]) {
      replica += s[i];
      index ++;
    }
  } if (replica == original) {
    return 'YES'
  }
  return 'NO'
}

export { hackerrankInString };
