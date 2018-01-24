'use strict';

(function(module) {
    const bookView = {};

    bookView.init = function() {
        console.log('bookView');
        $('#errorView').empty();
        $('#homeView').empty();
        $('#newBookView').empty();
    }
    
    module.bookView = bookView;
})(window);