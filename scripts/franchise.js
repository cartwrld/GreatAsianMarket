'use strict';

$(function () {

    hideFaqParagraphs();

    $(".faq-q").click(function () {
        if ($(window).width() < 768) {
            $(this).find("p").slideToggle(500);
        }
    });

    // Handle window resize
    $(window).resize(function () {
        hideFaqParagraphs();
    });
    
    $('.faq-item').click(function() {
        $(this).toggleClass('active');
        $(this).find('.collapse').collapse('toggle');
        $('.faq-item').not(this).removeClass('active').find('.collapse').collapse('hide');
    });


    formValidate();
    
});

function formValidate(){
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    // If form is valid, show the success message
                    document.getElementById('success-message').style.display = 'block';
                }

                form.classList.add('was-validated')
            }, false)
        })
}


function hideFaqParagraphs() {
    if ($(window).width() < 768) {
        $(".faq-ans").hide();
    } else {
        $(".faq-ans").show();
    }
}




