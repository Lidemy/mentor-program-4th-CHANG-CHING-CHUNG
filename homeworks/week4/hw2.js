/* eslint-disable no-shadow */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-case-declarations */
const req = require('request');

const input = process.argv[2];
const inputPara = process.argv[3];
const inputPara2 = process.argv[4];

function endpoint(para, para2, para3) {
  let newPapra;
  if (para !== undefined) {
    newPapra = para.toLowerCase();
  }
  const id = para2;
  const bookName = para3;

  switch (newPapra) {
    case 'list':
      req.get('https://lidemy-book-store.herokuapp.com/books?_limit=20', (err, res, body) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const books = JSON.parse(body);

            books.forEach((book) => {
              console.log(`${book.id} ${book.name}`);
            });
          // eslint-disable-next-line no-shadow
          } catch (err) {
            console.log('ERROR');
          }
        }
      });

      break;

    case 'read':
      req.get(`https://lidemy-book-store.herokuapp.com/books/${id}`, (err, res, body) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const book = JSON.parse(body);
            if (book.id !== undefined) {
              console.log(`${book.id} ${book.name}`);
            } else {
              console.log('No such book.');
            }
          } catch (err) {
            console.log('ERROR');
          }
        }
      });

      break;
    case 'delete':
      req.delete(`https://lidemy-book-store.herokuapp.com/books/${id}`, (err, res, body) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            if (id !== undefined) {
              console.log('The book has been deleted successfully!');
            } else {
              console.log('Please enter the ID of the book!');
            }
          } catch (err) {
            console.log('ERROR');
          }
        }
      });
      break;
    case 'create':
      const createOptions = {
        url: 'https://lidemy-book-store.herokuapp.com/books',
        form: { name: id },
      };
      req.post(createOptions, (err, res, body) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            if (id !== undefined) {
              console.log(`The book ${id} has been added successfully!`);
            } else {
              console.log('Please enter the title of the book!');
            }
          } catch (err) {
            console.log('ERROR');
          }
        }
      });
      break;
    case 'update':
      const updateOptions = {
        url: `https://lidemy-book-store.herokuapp.com/books/${id}`,
        form: { name: bookName },
      };
      req.patch(updateOptions, (err, res, body) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            if (id !== undefined && bookName !== undefined) {
              console.log('The title of the book has been updated successfully!');
            } else {
              console.log('Please enter book title and ID!');
            }
          } catch (err) {
            console.log('ERROR');
          }
        }
      });
      break;
    default:
      console.log('Enter list, read, delete, create or update to operate.');
  }
}


endpoint(input, inputPara, inputPara2);
