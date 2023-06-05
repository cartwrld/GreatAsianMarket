'use strict';

$(document).ready(function () {
    function hideFaqParagraphs() {
        if ($(window).width() < 768) {
            $("#faq p").hide();
        } else {
            $("#faq p").show();
        }
    }

    hideFaqParagraphs(); // Call the function initially

    $("#faq div").click(function () {
        if ($(window).width() < 768) {
            $(this).find("p").slideToggle(75);
        }
    });

    // Handle window resize
    $(window).resize(function () {
        hideFaqParagraphs();
    });
});



