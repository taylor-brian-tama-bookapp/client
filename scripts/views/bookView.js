'use strict';

(function(module) {
    const bookView = {};

    bookView.init = function() {
        console.log('bookView');
        $('#errorView').empty();
        $('#homeView').empty();
        $('#newBookView').hide();
    }
    
    module.bookView = bookView;
})(window);