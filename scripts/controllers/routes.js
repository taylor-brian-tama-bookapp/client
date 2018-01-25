'use strict';

page('/', function(){ page.redirect('/client');});
page('/client/', homeView.init, app.Book.fetchAll);
page('/client/new', newBookView.init);
page('/client/book/:book_id', singleBookView.init, app.Book.fetchSingle, app.Book.renderSingle);
page('/client/*', errorView.init);
page('/client/*/*', errorView.init);
page('/client/*/*/*', errorView.init);


// page('/', homeView.init, app.Book.fetchAll, app.Book.renderAll);
// page('/new', newBookView.init);
// page('/book/:book_id', singleBookView.init, app.Book.fetchSingle, app.Book.renderSingle);
// page('/*', errorView.init);
// page('/*/*', errorView.init);
// page('/*/*/*', errorView.init);


page();
