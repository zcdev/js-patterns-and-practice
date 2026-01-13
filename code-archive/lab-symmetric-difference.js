** start of script.js **

function diffArray(arr1, arr2) {
  if (!arr1.length && !arr2.length) return [];
  let combo = [];

  arr1.filter(arr1Item => {
    if (!arr2.includes(arr1Item)) {
      combo.push(arr1Item)
    }
  });

  arr2.filter(arr2Item => {
    if (!arr1.includes(arr2Item)) {
      combo.push(arr2Item)
    }
  });

  return combo;
}

** end of script.js **

