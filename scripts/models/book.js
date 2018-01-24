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
    Book.insertRecord = book => {
        $.post(`${__API_URL__ }/v1/books`, {title: this.title, author: this.author, isbn: this.isbn, image_url: this.image_url, description: this.description})
        .then(data => {
            console.log(data);
            if (callback) callback();
          })
    }

    // Article.prototype.insertRecord = function (callback) {
    //     console.log('article.prototype.insertrecord');
    //     // REVIEW: Why can't we use an arrow function here for .insertRecord()?
    //     $.post('/articles', { author: this.author, authorUrl: this.authorUrl, body: this.body, category: this.category, publishedOn: this.publishedOn, title: this.title })
    //       .then(console.log)
    //       .then(callback);
    //   };
    module.Book = Book;
})(app);