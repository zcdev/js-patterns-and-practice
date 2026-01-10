** start of script.js **

function mutation(arr) {
  const firstStr = arr[0].toLowerCase();
  const secondStr = arr[1].toLowerCase();
  let count = 0;
  let isIncluded = false;

    for (const letter of secondStr) {
      if (firstStr.includes(letter)) {
        count++;
      }
    }

    if (count === secondStr.length) {
      isIncluded = true;
    }

    return isIncluded;
}

** end of script.js **

