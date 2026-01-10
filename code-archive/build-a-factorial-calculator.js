** start of script.js **

const num = 6;
let result = 1;

function factorialCalculator(num) {
let newNum = 1;

do {
 newNum *= num;
 num--;
} while (num > result)
  return newNum
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);


** end of script.js **

