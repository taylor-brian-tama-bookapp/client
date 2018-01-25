// 'use strict';
// var app = app || {};

// (function(module) {
//     const book = {};

//     // var __API_URL__ = 'https://ttb-books.herokuapp.com';
//     var __API_URL__ = 'http://localhost:3000';

//     Book.prototype.deleteRecord = function (callback) {
//         console.log('book.prototype.deleterecord');
//         $.ajax({
//           url: `${__API_URL__}/v1/books/${this.book_id}`,
//           method: 'DELETE'
//         })
//           .then(console.log)
//           .then(callback);
//       };

//     Book.handleDeleteButton = () => {
//         $('.bookListing').on('click', $('#deleteButton'), function() {
//             console.log($(this).data('content'));
//         });
//     }
//     // $(`#${$(this).data('content')}`).fadeIn();


//     module.Book = Book;
// })(app);