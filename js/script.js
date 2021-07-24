function fadingElements() {

    $('.fadein-onload').each(function (i) {
        $(this).animate({ 'opacity': '1' }, 1000);
    });

    $(window).scroll( function(){
        $('.fadeinright').each(function (i) {
            var bottom_of_element = $(this).offset().top - 650 + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin-right': '0px' }, 1600);
            }
        });


        $('.fadeinright-sooner').each(function (i) {
            var bottom_of_element = $(this).offset().top - 150 + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin-right': '0px' }, 1600);
            }
        });


        $('.fadeinleft-sooner').each(function (i) {
            var bottom_of_element = $(this).offset().top - 650 + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin-left': '0px' }, 1600);
            }
        });


        $('.fadein').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 1700);
            }
        });


        $('.fadein-quick').each(function (i) {
            var bottom_of_element = $(this).offset().top - 250 + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 1400);
            }
        });
    });
};








$(fadingElements);
