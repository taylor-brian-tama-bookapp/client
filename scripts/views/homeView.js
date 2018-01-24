'use strict';

(function(module) {
    const homeView = {};

    homeView.init = function() {
        $('#bookView').empty();
        $('#errorView').empty();
        $('#newBookView').empty();
        Book.all.map(book => $('#books').append(book.toHtml()));
    }
    
    module.homeView = homeView;
})(window);