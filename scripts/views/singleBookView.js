'use strict';

(function(module) {
    const singleBookView = {};

    singleBookView.init = function(ctx, next) {
        // console.log('singlebookbookView.init', ctx.params.book_id);
        $('.tab-content').find('*').off();
        $('#errorView').hide();
        $('#homeView').hide();
        $('#newBookView').hide();
        $('#editBookView').hide();
        $('#singleBookView').show();
        next();
    }
    
    module.singleBookView = singleBookView;
})(window);