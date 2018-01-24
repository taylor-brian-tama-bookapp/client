'use strict';
page.base('/client');
page('/', homeView.init);
page('/new', newBookView.init);
page('/book/:book', bookView.init);
page('*', errorView.init);

page();
