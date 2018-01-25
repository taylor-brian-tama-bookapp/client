'use strict';
var app = app || {};

(function(module) {
    const book = {};
    var __API_URL__ = 'https://ttb-books.herokuapp.com';
    // var __API_URL__ = 'http://localhost:3000';

    // THIS IS 3RD
    function Book (rawBookDataObj) {
        Object.keys(rawBookDataObj).forEach(key => this[key] = rawBookDataObj[key]);
    }
    // PROPERTY OF CONSTRUCTOR, ALL BOOKS
    Book.all = [];
    // TURNS BOOKS INTO HTML VIA HANDLEBARS TEMPLATE ON INDEX PAGE IN HEAD
    // THIS IS 4TH
    Book.prototype.toHtml = function() {
        var template = Handlebars.compile($('#book-template').text());
        return template(this);
    };
    // AJAX REQUEST WHICH GO TO SERVER THEN DB, THIS JUST REQUEST ALL BOOKS DATA
    // THIS IS 1ST
    Book.fetchAll = (ctx, next) => {
        console.log('Book.fetchAll');
        $.get(`${__API_URL__ }/v1/books`)
            .then(results => {
                Book.loadAll(results);
            });
        //next();
     };

    // Book.fetchAll = () => {
    //     if (localStorage.ETag) {
    //       $.ajax({
    //         type: 'HEAD',
    //         url: `${__API_URL__ }/v1/books`,
    //         success: function(data, message, xhr) {
    //           let ETag = xhr.getResponseHeader('ETag');
    //           if(localStorage.ETag === ETag) {
    //             console.log('localStorage.ETag', localStorage.ETag, 'ETag', ETag);
    //             Book.loadAll(JSON.parse(localStorage.rawData));
    //           }
    //           else {
    //             $.ajax({
    //               type: 'HEAD',
    //               url: `${__API_URL__ }/v1/books`,
    //               method: 'GET',
    //               success: function(data, message, xhr) {
    //                 console.log('data', data);
    //                 console.log('message', message);
    //                 console.log('xhr', xhr);
    //                 console.log(xhr.getResponseHeader('ETag'));
    //                 ETag = xhr.getResponseHeader('ETag');
    //                 // console.log('ETag', ETag);
    //                 console.log('localStorage.ETag', localStorage.ETag, 'ETag', ETag);
    //                 localStorage.setItem('rawData', JSON.stringify(data));
    //                 localStorage.setItem('ETag', ETag);
    //                 // console.log(localStorage.rawData);
    //                 // console.log(localStorage.ETag);
    //                 Book.loadAll(data);
    //               }
    //             })
    //           }
    //         }
    //       });
    //     }
    //     else {
    //       $.ajax({
    //         type: 'HEAD',
    //         url: `${__API_URL__ }/v1/books`,
    //         method: 'GET',
    //         success: function(data, message, xhr) {
    //           // console.log('data', data);
    //           // console.log('message', message);
    //           // console.log('xhr', xhr);
    //           let ETag = xhr.getResponseHeader('ETag');
    //           // console.log('ETag', ETag);
    //           localStorage.setItem('rawData', JSON.stringify(data));
    //           localStorage.setItem('ETag', ETag);
    //           // console.log(localStorage.rawData);
    //           console.log('localStorage.ETag', localStorage.ETag);
    //           Book.loadAll(data);
    //         }
    //       })
    //     }
    //   }
          
    Book.renderAll = (ctx, next) => {
        console.log('render');
        app.Book.all.map(book => $('#books').append(book.toHtml()));
        //next();
    }

    // THIS IS 2ND
    Book.loadAll = rawBookData => {
        Book.all = rawBookData.map(bookObject => new Book(bookObject));
        Book.renderAll();
        
    }
    // post new book

    Book.prototype.insertRecord = function(callback){
        $.post(`${__API_URL__ }/v1/books`, {title: this.title, author: this.author, isbn: this.isbn, image_url: this.image_url, description: this.description})
        .then(callback); 
    };

    module.Book = Book;
})(app);