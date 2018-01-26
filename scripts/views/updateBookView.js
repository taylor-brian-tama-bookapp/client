'use strict';

(function(module) {
    const updateBookView = {};

    updateBookView.init = function(ctx, next) {
        console.log('updatebookbookView.init', ctx.params.book_id);
        $('#errorView').hide();
        $('#homeView').hide();
        $('#newBookView').hide();
        $('#singleBookView').hide();
        $('#updateBookView').show();
        next();
    }
    
    module.updateBookView = updateBookView;
})(window);