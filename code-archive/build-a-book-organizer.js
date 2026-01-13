** start of script.js **

let books = [
  {title: "Who's BFF?", authorName: "Kiddo", releaseYear: 2026}, 
  {title: "You Don't Know TS", authorName: "Cool Dev", releaseYear: 2020}, 
  {title: "No Philosopher's Paradox", authorName: "Unknown", releaseYear: 1950},
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1
  } else {
  return 0;
  } 
}

const filteredBooks = books.filter(book => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);

** end of script.js **

