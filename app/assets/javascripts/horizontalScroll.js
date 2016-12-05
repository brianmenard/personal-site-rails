$(document).ready(function ($) {

    $(".scroll").click(function (event) {
        var current = $('.long-row').scrollLeft();
        var left = $(this.hash).position().left;        

        event.preventDefault();

        $('.long-row').animate({
            scrollLeft: current + left
        }, 750);
    });
});