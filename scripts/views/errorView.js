'use strict';

(function(module) {
    const errorView = {};

    errorView.init = function() {
        $('#bookView').empty();
        $('#homeView').empty();
        $('#newBookView').empty();
    }
    
    module.errorView = errorView;
})(window);