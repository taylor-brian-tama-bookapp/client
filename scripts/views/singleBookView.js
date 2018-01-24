'use strict';

(function(module) {
    const singleBookView = {};

    singleBookView.init = function() {
        console.log('bookView');
        $('#errorView').empty();
        $('#homeView').empty();
        $('#newBookView').hide();
    }
    
    module.singleBookView = singleBookView;
})(window);