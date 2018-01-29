'use strict';

(function(module) {
    const homeView = {};

    homeView.init = function(ctx, next) {
        $('.tab-content').find('*').off();
        $('#singleBookView').hide();
        $('#errorView').hide();
        $('#newBookView').hide();
        $('#editBookView').hide();
        $('#homeView').show();
        next();
    }

    module.homeView = homeView;
})(window);