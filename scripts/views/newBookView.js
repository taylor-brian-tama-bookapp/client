'use strict';

(function(module) {
    const newBookView = {};

    newBookView.init = function() {
        console.log('newView');
        $('#bookView').empty();
        $('#errorView').empty();
        $('#homeView').empty();
        $('#newBookView').show();
    }
    
    module.newBookView = newBookView;
})(window);