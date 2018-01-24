'use strict';

page('/', homeView.init);
page('/new', newBookView.init);
page('*', errorView.init);

page();