'use strict';

(function(module) {
    const editBookView = {};

    editBookView.init = function(ctx, next) {
        console.log(ctx.params.book_id);
        $('.tab-content').find('*').off();
        $('#errorView').hide();
        $('#homeView').hide();
        $('#newBookView').hide();
        $('#singleBookView').hide();
        $('#editBookView').show();
        $('#editButton').on('click', app.Book.prototype.updateRecord);
        next();
    }
    
    module.editBookView = editBookView;
})(window);