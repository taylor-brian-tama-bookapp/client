'use strict';

(function(module) {
    const homeView = {};

    homeView.init = function() {
        console.log('homeView');
        $('#singleBookView').empty();
        $('#errorView').empty();
        $('#newBookView').hide();
    }

        
        
    
    module.homeView = homeView;
})(window);