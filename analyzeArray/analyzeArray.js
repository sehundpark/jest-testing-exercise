function analyzeArray(arr) {
  if (arr.length === 0) {
    return { average: NaN, length: 0, max: NaN, min: NaN };
  }

  let sum = 0;
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  const average = sum / arr.length;

  return {
    average: average,
    min: min,
    max: max,
    length: arr.length,
  };
}

module.exports = analyzeArray;
