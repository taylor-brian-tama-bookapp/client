'use strict';

(function(module) {
    const homeView = {};

    homeView.init = function() {
        console.log('homeView');
        $('#bookView').empty();
        $('#errorView').empty();
        $('#newBookView').hide();
        Book.all.map(book => $('#books').append(book.toHtml()));
    }
    
    module.homeView = homeView;
})(window);