const req = require('request');


req.get('https://lidemy-book-store.herokuapp.com/books?_limit=10', (err, res, body) => {
  if (res.statusCode >= 200 && res.statusCode < 300) {
    try {
      const books = JSON.parse(body);

      books.forEach((book) => {
        console.log(`${book.id} ${book.name}`);
      });
    } catch (e) {
      console.log(e);
    }
  }
});
