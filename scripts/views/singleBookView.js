'use strict';

(function(module) {
    const singleBookView = {};

    singleBookView.init = function() {
        console.log('bookView');
        $('#errorView').empty();
        $('#homeView').hide();
        $('#newBookView').hide();
        $('#singleBookView').show();
    }
    
    module.singleBookView = singleBookView;
})(window);