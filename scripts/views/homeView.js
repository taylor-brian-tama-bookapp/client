'use strict';

(function(module) {
    const homeView = {};

    homeView.init = function(ctx, next) {
        console.log('homeView');
        $('#singleBookView').hide();
        $('#errorView').empty();
        $('#newBookView').hide();
        $('#homeView').show();
        next();
    }

        
        
    
    module.homeView = homeView;
})(window);