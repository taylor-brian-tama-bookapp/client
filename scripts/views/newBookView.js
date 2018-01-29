'use strict';

(function(module) {
    let newBookView = {};

    newBookView.init = function() {
        $('.tab-content').find('*').off();
        $('#singleBookView').hide();
        $('#errorView').hide();
        $('#homeView').hide();
        $('#editBookView').hide();
        $('#newBookView').show();
        $('#newBookForm').on('submit', newBookView.submit);
    }

    newBookView.submit = e => {
        e.preventDefault();
        let book = {
          title: e.target.title.value,
          author: e.target.author.value,
          isbn: e.target.isbn.value,
          image_url: e.target.image_url.value,
          description: e.target.newBookTextArea.value, 
        };
        // console.log(book);
        app.Book.insertRecord(book);
      }
    
    module.newBookView = newBookView;
})(window);