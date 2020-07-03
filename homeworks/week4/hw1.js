const req = require('request');


req.get('https://lidemy-book-store.herokuapp.com/books?_limit=10', (error, res, body) => {
  const books = JSON.parse(body);

  books.forEach((book) => {
    console.log(`${book.id} ${book.name}`);
  });
});
