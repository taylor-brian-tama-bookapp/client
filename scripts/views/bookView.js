'use strict';

(function(module) {
    const bookView = {};

    bookView.init = function() {
        $('#errorView').empty();
        $('#homeView').empty();
        $('#newBookView').empty();
        Book.all.map(book => $('#books').append(book.toHtml()));
    }
    
    module.bookView = bookView;
})(window);