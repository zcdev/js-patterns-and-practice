** start of script.js **

function truncateString(string, number) {
  if (string.length > number) {
    return string.replace(string.substring(number, string.length), "...");
  } else {
    return string;
  }
}

** end of script.js **

