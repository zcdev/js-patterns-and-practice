** start of script.js **

function sumAll(array) {
  const min = Math.min(array[0], array[1]);
  const max = Math.max(array[0], array[1]);
  let sum = 0;

  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
}

** end of script.js **

