** start of script.js **

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);

  let result = 1;

  for (let i = min; i <= max; i++) {
    result = lcm(result, i);
  }

  return result;
}

** end of script.js **

