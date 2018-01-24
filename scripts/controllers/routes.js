'use strict';
page.base('/client');
page('/client/', homeView.init);
page('/client/new', newBookView.init);
page('/client/book/:book', bookView.init);
page('/client/*', errorView.init);

page();
