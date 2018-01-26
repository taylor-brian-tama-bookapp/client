'use strict';

(function(module) {
    const errorView = {};

    errorView.init = function() {
        $('#singleBookView').hide();
        $('#homeView').hide();
        $('#newBookView').hide();
        $('#editBookView').hide();
        $('#errorView').show();
    }
    
    module.errorView = errorView;
})(window);