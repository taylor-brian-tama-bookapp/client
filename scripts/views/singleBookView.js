'use strict';

(function(module) {
    const singleBookView = {};

    singleBookView.init = function(ctx, next) {
        console.log('bookView', ctx.params.book_id);

        $('#errorView').empty();
        $('#homeView').hide();
        $('#newBookView').hide();
        $('#singleBookView').show();
        next();
    }
    
    module.singleBookView = singleBookView;
})(window);