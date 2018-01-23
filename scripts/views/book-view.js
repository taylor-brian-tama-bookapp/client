'use strict';

// var __API_URL__ = 'postgres://ufupbwasntcdow:2b91e2e8820a8f374e22283400b001b89103da1de642bc3d6821264e4d4087e9@ec2-54-163-237-249.compute-1.amazonaws.com:5432/ddohnecq4qookv';

let bookView = {};

bookView.initIndexPage = function() {
    console.log('initpage')
    Book.all.map(book => $('#books').append(book.toHtml()));
}

