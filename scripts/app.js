'use strict';

$('.hamburger').on('click', function() {
    $('#hamburgerToggle').toggle();
});
$('#hamburgerToggle a').on('click', function() {
    $('#hamburgerToggle').toggle();
});