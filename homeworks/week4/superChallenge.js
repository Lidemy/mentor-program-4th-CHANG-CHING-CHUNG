/* eslint-disable prefer-destructuring */
/* eslint-disable no-return-assign */
const http = require('http');
const readline = require('readline');


const inputArgs = process.argv.slice(2);

function getLIst() {
  const options = {
    host: 'lidemy-book-store.herokuapp.com',
    path: '/books?_limit=20',
  };
  http.get(options, (res) => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      let rawData = '';
      res.on('data', data => rawData += data);
      res.on('end', () => {
        try {
          const books = JSON.parse(rawData);
          books.forEach(book => console.log(`Book ID: <${book.id}> Book title: '${book.name}'`));
        } catch (e) {
          console.log(e.message);
        }
      }).on('error', (e) => {
        console.log(e.message);
      });
    } else {
      console.log('Sorry, something went wrong');
    }
  });
}

function getOneBook(id) {
  const options = {
    host: 'lidemy-book-store.herokuapp.com',
    path: `/books/${id}`,
  };

  http.get(options, (res) => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      try {
        let rawData = '';
        res.on('data', data => rawData += data);
        res.on('end', () => {
          try {
            const book = JSON.parse(rawData);
            console.log(`Book ID: <${book.id}> Book title: '${book.name}'`);
          } catch (e) {
            console.log(e.message);
          }
        });
      } catch (e) {
        console.log(e.message);
      }
    } else {
      console.log('Sorry, something went wrong');
    }
  });
}

function deleteOneBook(id) {
  const options = {
    host: 'lidemy-book-store.herokuapp.com',
    path: `/books/${id}`,
    method: 'DELETE',
  };

  const req = http.request(options, (res) => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      console.log('The book has been deleted successfully');
    } else {
      console.log('Sorry, something went wrong');
    }
  });
  req.end();
}

function addOneBook(title) {
  const postBook = JSON.stringify({
    name: title,
  });
  const options = {
    host: 'lidemy-book-store.herokuapp.com',
    path: '/books',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postBook),
    },
  };

  const req = http.request(options, (res) => {
    console.log(res.statusCode);
    if (res.statusCode >= 200 && res.statusCode < 300) {
      console.log(`The book ${title} has been added successfully`);
    } else {
      console.log('Sorry, something went wrong');
    }
  });
  req.write(postBook);
  req.end();
}

function updataBook(id, title) {
  const postBook = JSON.stringify({
    name: title,
  });
  const options = {
    host: 'lidemy-book-store.herokuapp.com',
    path: `/books/${id}`,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postBook),
    },
  };
  const req = http.request(options, (res) => {
    console.log(res.statusCode);
    if (res.statusCode >= 200 && res.statusCode < 300) {
      console.log(`The book ${title} has been updated successfully`);
    } else {
      console.log('Sorry, something went wrong');
    }
  });
  req.write(postBook);
  req.end();
}

function endPoint(args) {
  let method;
  if (args[0] !== undefined) {
    method = args[0].toLowerCase();
  }
  const id = args[1];
  let title;

  switch (method) {
    case 'list':
      getLIst();
      break;
    case 'read':
      if (id === undefined) {
        console.log('Please enter an ID!');
        break;
      }
      getOneBook(id);
      break;
    case 'delete':
      if (id === undefined) {
        console.log('Please enter an ID!');
        break;
      }
      deleteOneBook(id);
      break;
    case 'create':
      if (id === undefined) {
        console.log('Please enter a title!');
        break;
      }
      title = String(id);
      addOneBook(title);
      break;
    case 'update':
      title = args[2];
      if (id === undefined || title === undefined) {
        console.log('Please enter an ID and a title!');
        break;
      }
      updataBook(id, title);
      break;
    default:
      console.log('Enter list, read, delete, create or update to operate.');
  }
}

endPoint(inputArgs);
