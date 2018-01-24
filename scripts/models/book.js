'use strict';
var app = app || {};

(function(module) {
    const book = {};

    var __API_URL__ = 'https://ttb-books.herokuapp.com';
    
  //heroku URL 

    // THIS IS 3RD
    function Book (rawBookDataObj) {
        Object.keys(rawBookDataObj).forEach(key => this[key] = rawBookDataObj[key]);
        // bookAuthor, bookCategory, imageUrl, bookTitle, authorUrl
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
    Book.fetchAll = callback => {
        $.get(`${__API_URL__ }/v1/books`)
            .then(results => {
                Book.loadAll(results);
            })
            .then(callback);
    };
    // THIS IS 2ND
    Book.loadAll = rawBookData => {
        Book.all = rawBookData.map(bookObject => new Book(bookObject));
    }
    // post new book
    Book.prototype.insertRecord = function(callback){
        $.post(`${__API_URL__ }/v1/books`, {title: this.title, author: this.author, isbn: this.isbn, image_url: this.image_url, description: this.description})
        .then(callback); 
    };
        
        
        
        // {
        //     // pageLoad();
        //     console.log('1');
        //   })
        //   .catch(function(err) {
        //     console.error(err);
        //     // pageLoad();
        //     console.log('2');
        //   });
        // }

    module.Book = Book;
})(app);