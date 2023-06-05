'use strict';

$(function () {

    hideFaqParagraphs();

    $("#faq div").click(function () {
        if ($(window).width() < 768) {
            $(this).find("p").slideToggle(75);
        }
    });

    // Handle window resize
    $(window).resize(function () {
        hideFaqParagraphs();
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
        $("#faq p").hide();
    } else {
        $("#faq p").show();
    }
}




