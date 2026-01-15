** start of script.js **

function truthCheck(collection, pre) {
  pre = collection.every(obj => Boolean(obj[pre]));
  return pre;
}

** end of script.js **

