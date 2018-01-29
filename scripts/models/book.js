'use strict';
var app = app || {};
var __API_URL__ = 'https://ttb-books.herokuapp.com';
//  var __API_URL__ = 'http://localhost:3000';

(function(module) {
    const book = {};
    let currentBookId = localStorage.currentBookId || '';

    

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
        $('#updateButton').attr('href', `/client/book/${ctx.params.book_id}/edit`);
        // $('#updateButton').attr('href', `/book/${ctx.params.book_id}/edit`);
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

    // POST - Inserts a new record into the database
    Book.insertRecord = function(book){
        $.post(`${__API_URL__ }/v1/books`, book)
            .then(() => page('/client'))
            .catch(console.error);
    };

    // Delete - removes a record from the database
    Book.prototype.deleteRecord = (ctx, next) => {
        let book_id = ctx.params.book_id;
        $('#deleteButton').on('click', function() {
            $.ajax({
                url: `${__API_URL__}/v1/books/${book_id}`,
                method: 'DELETE',
                success: function() {
                    success: page.show(`/client`);
                    // success: page.show(`/`);
                },
            })
        });
    }

// UPDATE/PUT
    // 3rd - adds this boks values to edit form
    Book.renderEditSingle = (ctx, next) => {
        $('#editBook_author').val(Book.single[0].author);
        $('#editBook_description').val(Book.single[0].description);
        $('#editBook_image_url').val(Book.single[0].image_url);
        $('#editBook_isbn').val(Book.single[0].isbn);
        $('#editBook_title').val(Book.single[0].title);
    }

    Book.prototype.updateRecord = function() {
        let book_id = Book.single[0].book_id;
            let book = {
                author: $('#editBook_author').val(),
                description: $('#editBook_description').val(),
                image_url: $('#editBook_image_url').val(),
                isbn: $('#editBook_isbn').val(),
                title: $('#editBook_title').val()
            };
            $.ajax({
                url: `${__API_URL__}/v1/books/${book_id}/edit`,
                method: 'PUT',
                data: {
                    title: book.title,
                    author: book.author,
                    isbn: book.isbn,
                    image_url: book.image_url,
                    description: book.description
                },
                success: results => {
                    page.show(`/client/book/${book_id}`);
                    // page.show(`/book/${book_id}`);
                },
            });
    }

    module.Book = Book;
})(app);