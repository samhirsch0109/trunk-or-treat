$(document).ready(function () {
    $('.toggle-button').on('click', function () {
        $('.information').toggle();
    });
});

$('.trunk-image').on('mouseenter', function (event) {
    $(event.currentTarget).next('.trunk-description').fadeIn(1000);
});

$('.trunk-image').on('mouseleave', function (event) {
    $(event.currentTarget).next('.trunk-description').fadeOut(1000);
});

$('#event1-heading').on('click', function () {
    $('#event1-details').slideToggle();
});

$('#event2-heading').on('click', function () {
    $('#event2-details').slideToggle();
});

$('#event3-heading').on('click', function () {
    $('#event3-details').slideToggle();
});
