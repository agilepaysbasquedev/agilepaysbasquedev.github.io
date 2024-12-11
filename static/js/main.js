/*  ---------------------------------------------------
    Template Name: Manup
    Description: Manup Event HTML Template
    Author: Colorlib
    Author URI: http://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
        Speaker
    --------------------*/
    $(".toggle-bio-btn").on("click", function () {
        const $bio = $(this).prev('.bio');

        if ($(this).text() == "Voir moins") {
            $bio.css("display", "-webkit-box");
            $(this).text("Voir plus");
        } else {
            $bio.css("display", "block");
            $(this).text("Voir moins");
        }
    });
})(jQuery);
