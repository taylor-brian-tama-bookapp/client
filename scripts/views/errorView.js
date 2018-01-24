'use strict';

(function(module) {
    const errorView = {};

    errorView.init = function() {
        console.log('errorView');
        $('#bookView').empty();
        $('#homeView').empty();
        $('#newBookView').empty();
    }
    
    module.errorView = errorView;
})(window);