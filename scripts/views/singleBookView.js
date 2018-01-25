'use strict';

(function(module) {
    const singleBookView = {};

    singleBookView.init = function(ctx, next) {
        console.log('singlebookbookView.init', ctx.params.book_id);
        $('#errorView').empty();
        $('#singleBookView').show();
        $('#homeView').hide();
        $('#newBookView').hide();
        $('#singleBookView').show();
        next();
    }
    
    module.singleBookView = singleBookView;
})(window);