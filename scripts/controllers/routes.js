'use strict';
page('https://taylor-brian-tama-bookapp.github.io/client', () => {page.redirect('/admin');});
page('https://taylor-brian-tama-bookapp.github.io/', homeView.init);
page('https://taylor-brian-tama-bookapp.github.io/new', newBookView.init);
page('https://taylor-brian-tama-bookapp.github.io/book/:book', bookView.init);
page('*', errorView.init);

page();

