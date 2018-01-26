'use strict';
var app = app || {};

(function(module) {
    const book = {};

    // var __API_URL__ = 'https://ttb-books.herokuapp.com';
     var __API_URL__ = 'http://localhost:3000';

    // Constructor function
    function Book (rawBookDataObj) {
        Object.keys(rawBookDataObj).forEach(key => this[key] = rawBookDataObj[key]);
    }

    //Proerty of constructor, all books and single book respectively
    Book.all = [];
    Book.single = [];

    // 4TH - Handlebars template
    Book.prototype.toHtml = function() {
        var template = Handlebars.compile($('#book-template').text());
        return template(this);
    }

    // 3rd - maps book from constructor to tamplate and appends it to html
    Book.renderAll = (ctx, next) => {
        $('#books').empty();
        app.Book.all.map(book => $('#books').append(book.toHtml()));
    }

    // 2ND - takes the results and maps it to  the new Book constructor
    Book.loadAll = (ctx, next) => {
        Book.all = ctx.results.map(bookObject => new Book(bookObject));
        next();
    }

    // 1st - AJAX REQUEST WHICH GO TO SERVER THEN DB, THIS JUST REQUEST ALL BOOKS DATA
    Book.fetchAll = (ctx, next) => {
        $.get(`${__API_URL__ }/v1/books`)
            .then(results => {
                ctx.results = results;
                next();
            });
    }

    // 4th - handlebars tamplate
    Book.prototype.singleHtml = function() {
        var template = Handlebars.compile($('#individual-template').text());
        return template(this);
    }

    // 3rd - maps book from constructor to tamplate and appends it to html
    Book.renderSingle = (ctx, next) => {
        $('#individualBook').empty();
        app.Book.single.map(book => $('#individualBook').append(book.singleHtml()));
        next();
    }

    // 2ND - takes the individual result and maps it to  the new Book constructor
    Book.loadSingle = (ctx, next) => {
        Book.single = [];
        Book.single = ctx.results.map(bookObject => new Book(bookObject));
        next();
    }

    // 1st - AJAX REQUEST WHICH GO TO SERVER THEN DB, THIS JUST REQUEST INDIVIDUAL BOOK DATA
    Book.fetchSingle = (ctx, next)  => {
        $.get(`${__API_URL__}/v1/books/${ctx.params.book_id}`)
           .then(results => {
               ctx.results = results;
               next();
           });
    };

    Book.test = (ctx, next)  => {
        console.log(ctx);
    };
    // POST - Inserts a new record into the database
    Book.prototype.insertRecord = function(){
        $.ajax({
            url: `${__API_URL__ }/v1/books`,
            method: 'POST',
            data: {
              title: this.title,
              author: this.author,
              isbn: this.isbn,
              image_url: this.image_url,
              description: this.description
            },
            success: window.location = '../',
        })
    };

    // Delete - removes a record from the database
    Book.prototype.deleteRecord = (ctx, next) => {
        let book_id = ctx.results[0].book_id;
        $('.bookListing').on('click', $('#deleteButton'), function() {
            $.ajax({
                url: `${__API_URL__}/v1/books/${book_id}`,
                method: 'DELETE',
                success: function() {
                    window.location = '../';
                }
            })
        });
    }

    // UPDATE/PUT
    // Book.prototype.updateHtml = function() {
    //     var template = Handlebars.compile($('#update-template').html());
    //     return template(this);
    // };

    // Book.prototype.updateRecord = function (callback) {
    //     console.log('book.prototype.updaterecord');
    //     $.ajax({
    //       url: `${__API_URL__}/v1/books/${this.book_id}`,
    //       method: 'PUT',
    //       data: {
    //         title: this.title,
    //         author: this.author,
    //         isbn: this.isbn,
    //         image_url: this.image_url,
    //         description: this.description
    //       }
    //     })
    //       .then(console.log)
    //       .then(callback);
    //   };

    // Book.handleUpdateButton = () => {
    //     $('.bookListing').on('click', $('#updateButton'), function() {
    //         let book_id = $(this).data('id');
    //         // Book.prototype.updateRecord(book_id);
    //     });
    // }

    module.Book = Book;
})(app);