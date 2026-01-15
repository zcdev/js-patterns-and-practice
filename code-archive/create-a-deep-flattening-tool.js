** start of script.js **

function steamrollArray(arr) {
  let flattened = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      flattened.push(...steamrollArray(item)); 
    } else {
      flattened.push(item);
    }
  }
  return flattened;
}

** end of script.js **

