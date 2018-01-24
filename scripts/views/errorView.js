'use strict';

(function(module) {
    const errorView = {};

    errorView.init = function() {
        console.log('errorView');
        $('#bookView').empty();
        $('#homeView').empty();
        $('#newBookView').hide();
    }
    
    module.errorView = errorView;
})(window);