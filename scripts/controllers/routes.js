'use strict';

page('/', function(){ page.redirect('/client');});
page('/client/', homeView.init, app.Book.fetchAll);
page('/client/new', newBookView.init);
page('/client/book/:book', singleBookView.init);
page('/client/*', errorView.init);

// //page('/client', function(){ page.redirect('/');});
// page('/', homeView.init, app.Book.fetchAll, app.Book.renderAll);
// page('/new', newBookView.init);
// page('/book/:book', singleBookView.init);
// //page('/client/*', errorView.init);


page();
