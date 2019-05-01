function funnyString(s) {
  //converse char to code
  let charCode = convert(s);
  //copy and reverse
  let revCode = charCode.slice().reverse();
  let res_char = [];
  let res_rev = [];
  //calcs
  for (let i = 0; i < (s.length - 1); i++) {
    res_char.push(Math.abs(charCode[i] - charCode[i+1]));
    res_rev.push(Math.abs(revCode[i] - revCode[i+1]));
  }
  //funny or not funny
  let count = 0;
  for (let i = 0; i < res_char.length; i++) {
    if (res_char[i] == res_rev[i]) {
      count ++;
    }
  }
  if (count == res_rev.length) {
    return 'Funny'
  } return 'Not Funny'
}

function convert(str) {
  let arr = [];
  for (let letter of str) {
    arr.push(letter.charCodeAt())
  } return arr;
}

export { funnyString };
