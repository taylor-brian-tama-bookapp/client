'use strict';

(function(module) {
    const errorView = {};

    errorView.init = function() {
        console.log('errorView');
        $('#singleBookView').empty();
        $('#homeView').empty();
        $('#errorView').empty();
        $('#newBookView').hide();
        $('#errorView').append(`<section class="errorViewContainer"><img src="/images/404.jpg" alt="404 error"></section>`);
    }
    
    module.errorView = errorView;
})(window);