'use strict';

(function(module) {
    let newBookView = {};

    newBookView.init = function() {
        console.log('newView');
        $('#singleBookView').empty();
        $('#errorView').empty();
        $('#homeView').empty();
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
          publishedOn: new Date().toISOString()
        });
        console.log(book);
        app.Book.insertRecord();
        // window.location = '../';
      }
    
    module.newBookView = newBookView;
})(window);