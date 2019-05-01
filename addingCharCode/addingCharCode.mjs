function addingCharCode(s) {
  let str = s.split('')
  let soma = 0
  for (let v of str) {
    soma += v.charCodeAt(); 
  } return soma;
}

export { addingCharCode };
