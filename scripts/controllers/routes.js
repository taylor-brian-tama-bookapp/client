'use strict';

page('/client', function(){ page.redirect('/');});
page('/', homeView.init, app.Book.fetchAll);
page('/new', newBookView.init);
page('/book/:book', singleBookView.init);
// page('*', errorView.init);

page();
