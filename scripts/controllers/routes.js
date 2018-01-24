'use strict';

//page('/client', function(){ page.redirect('/');});
page('/client/', homeView.init, app.Book.fetchAll, app.Book.renderAll);
page('/client/new', newBookView.init);
page('/client/book/:book', singleBookView.init);
//page('/client/*', errorView.init);

page();
