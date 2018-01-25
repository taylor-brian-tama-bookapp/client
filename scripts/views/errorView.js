'use strict';

(function(module) {
    const errorView = {};

    errorView.init = function() {
        console.log('errorView');
        $('#singleBookView').hide();
        $('#homeView').hide();
        $('#errorView').empty();
        $('#newBookView').hide();
        // $('#errorView').append(`<section class="errorViewContainer"><img src="./client/images/404.jpg" alt="404 error"></section>`);
        // prod error view above, testing error view below
        $('#errorView').append(`<section class="errorViewContainer"><img src="./images/404.jpg" alt="404 error"></section>`);
    }
    
    module.errorView = errorView;
})(window);