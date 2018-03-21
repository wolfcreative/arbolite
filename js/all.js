$(window).on("load resize", function () {
    /* Adaprive menu */
    if(window.innerWidth>539){
        $('header .uk-icon').attr('uk-icon', 'ratio: 1.6');
    } else {
        $('header .uk-icon').attr('uk-icon', 'ratio: 1.2');
    };
});

$( document ).ready(function() {
    $('.slider-main').slick({
        dots: true,
        autoplay: true,
    });
});