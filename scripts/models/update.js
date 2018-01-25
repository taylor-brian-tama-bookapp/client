// 'use strict';
// var app = app || {};

// (function(module) {
//     const book = {};

//     // var __API_URL__ = 'https://ttb-books.herokuapp.com';
//      var __API_URL__ = 'http://localhost:3000';

//     Book.prototype.updateRecord = function (callback) {
//         console.log('book.prototype.updaterecord');
//         $.ajax({
//           url: `${__API_URL__}/v1/books/${this.book_id}`,
//           method: 'PUT',
//           data: {
//             title: this.title,
//             author: this.author,
//             isbn: this.isbn,
//             image_url: this.image_url,
//             description: this.description
//           }
//         })
//           .then(console.log)
//           .then(callback);
//       };


//     module.Book = Book;
// })(app);