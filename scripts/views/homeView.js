'use strict';

(function(module) {
    const homeView = {};

    homeView.init = function(ctx, next) {
        console.log('homeView');
        $('#singleBookView').empty();
        $('#errorView').empty();
        $('#newBookView').hide();
        next();
    }

        
        
    
    module.homeView = homeView;
})(window);