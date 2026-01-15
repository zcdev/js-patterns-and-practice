** start of script.js **

function whatIsInAName(arrOfObjs, obj) {
  const keys = Object.keys(obj);
  return arrOfObjs.filter(item => keys.every(key => item[key] === obj[key]));
}

** end of script.js **

