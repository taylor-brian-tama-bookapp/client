'use strict';

(function(module) {
    let newBookView = {};

    newBookView.init = function() {
        console.log('newView');
        $('#singleBookView').hide();
        $('#errorView').empty();
        $('#homeView').hide();
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
          description: $('#description').val(),

          
        });
        console.log(book);
        book.insertRecord();

        // window.location = '../';
      }
    
    module.newBookView = newBookView;
})(window);