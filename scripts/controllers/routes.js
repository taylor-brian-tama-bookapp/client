'use strict';

//page('/client', function(){ page.redirect('/');});
page('/client', homeView.init, app.Book.fetchAll);
page('/client/new', newBookView.init);
page('/client/book/:book', singleBookView.init);
page('*', errorView.init);

page();
