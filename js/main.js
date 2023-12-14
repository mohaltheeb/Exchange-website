$(function () {

    'use strict';
    var winh = $(window).height(),
    upperh   = $('.upper-bar').innerheight(),
    navh     = $('.navbar').innerheight();
    $('.slider ,.carousel-item').height( winh - ( upperh + navh));

});