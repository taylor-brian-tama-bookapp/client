'use strict';

page('/client', function(){ page.redirect('/');});
page('/', homeView.init);
page('/', app.Book.fetchAll, app.Book.all.map(book => $('#books').append(book.toHtml())));
page('/new', newBookView.init);
page('/book/:book', singleBookView.init);
page('*', errorView.init);

page();