'use strict';
page('/client', () => {page.redirect('/admin');});
page('/', homeView.init);
page('/new', newBookView.init);
page('/book/:book', bookView.init);
page('*', errorView.init);

page();

