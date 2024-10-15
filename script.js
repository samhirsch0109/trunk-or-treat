$(document).ready(function () {
    $('.toggle-button').on('click', function () {
        $('.information').toggle();
    });
});

$('.trunk-image').on('mouseenter', function (event) {
    $(event.currentTarget).next('.trunk-description').fadeIn(800);
});

$('.trunk-image').on('mouseleave', function (event) {
    $(event.currentTarget).next('.trunk-description').fadeOut(500);
});

$('#schedule1-heading').on('click', function () {
    $('#time1-details').slideToggle();
});

$('#schedule2-heading').on('click', function () {
    $('#time2-details').slideToggle();
});

$('#schedule3-heading').on('click', function () {
    $('#time3-details').slideToggle();
});
