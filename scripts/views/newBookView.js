'use strict';

(function(module) {
    let newBookView = {};

    newBookView.init = function() {
        $('#singleBookView').hide();
        $('#errorView').hide();
        $('#homeView').hide();
        $('#editBookView').hide();
        $('#newBookView').show();
        $('#newBookForm').on('submit', newBookView.submit);
    }

    newBookView.submit = e => {
        e.preventDefault();
        let book = new app.Book({
          title: $('#title').val(),
          author: $('#author').val(),
          isbn: $('#isbn').val(),
          image_url: $('#image_url').val(),
          description: $('#newBookTextArea').val(), 
        });
        book.insertRecord();
      }
    
    module.newBookView = newBookView;
})(window);