'use strict';

page('/client/', homeView.init);
page('/client/new', newBookView.init);
page('/client/book/:book', bookView.init);
page('*', errorView.init);

page();