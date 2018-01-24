'use strict';

(function(module) {
    const newBookView = {};

    newBookView.init = function() {
        $('#bookView').empty();
        $('#errorView').empty();
        $('#homeView').empty();
    }
    
    module.newBookView = newBookView;
})(window);