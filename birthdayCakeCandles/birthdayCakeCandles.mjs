function birthdayCakeCandles(candles) {
  let count = 0;
  let max = 0;
  for (let value of candles) {
    if (value > max) {
      max = value
    }
  }
  for (let value of candles) {
    if (value == max) {
      count ++;
    }
  } return count;
}

export { birthdayCakeCandles };
