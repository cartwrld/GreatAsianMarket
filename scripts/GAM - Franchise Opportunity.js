'use strict';

$(document).ready(function () {


    $(".faq p").hide();

    $("div.faq-item").on("click", function () {
        $(this).find("p").slideToggle("75");
    });

});