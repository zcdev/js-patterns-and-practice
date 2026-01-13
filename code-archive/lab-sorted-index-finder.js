** start of script.js **

function getIndexToIns(arr, num) {
  const sortedArr = arr.sort((a, b) => a - b);
  const foundIdx = sortedArr.findIndex(item => item >= num);
  return foundIdx === -1 ? sortedArr.length : foundIdx;
}

** end of script.js **

