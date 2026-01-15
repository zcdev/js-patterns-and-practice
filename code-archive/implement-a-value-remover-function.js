** start of script.js **

function destroyer(...args) {
  const arr = args[0];
  const [,... otherArgs] = args;
  const hold = arr.filter(item => otherArgs.includes(item) !== arr.includes(item));
  return hold;
}

** end of script.js **

