"use strict"

class Location {
    constructor(id, storeName, streetAddress, cityDetails, phone, email, latitude, longitude) {
        this.id = id;
        this.storeName = storeName;
        this.streetAddress = streetAddress;
        this.citydetails = cityDetails;
        this.phone = phone;
        this.email = email;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}


const locationCBO = $('#location_cbo');

let locationList = [];
let map;
let marker;

$(function () {
    
    
    estNavBar()
    handleContactUsClick()
    
});


function estNavBar() {
    $('#navbarHTML').html(`
    <nav class="navbar navbar-expand-lg bg-success navbar-dark sticky-top shadow">
    <div class="container-fluid ">

        <div class="container-fluid text-center d-flex flex-row flex wrap  align-items-center">
            <a href="easteregg.html">
                <img src="media/GAM_logo.png" alt="GAM Logo" style="width:135px;">
            </a>
            <div class="container-fluid ">
                <div class="navbar-text text-center text-white h2 h6-xl">Great Asian Market</div>
            </div>
            <button class="navbar-toggler mt-xl-3" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="container-fluid collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav container h5">
                <li class="text-center text-light d-flex flex-row justify-content-center align-items-center">
                    <a class="nav-link" href="home.html">Home</a>
                </li>
                <li class="mt-2 px-2 ">
                    <span class="nav-separator d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">|</span>
                </li>
                <li class="nav-item text-center d-flex flex-row justify-content-center align-items-center">
                    <a class="nav-link" href="promotions.html">Promotions</a>
                </li>
                <li class="mt-2 px-2">
                    <span class="nav-separator d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">|</span>
                </li>
                <li class="nav-item text-center d-flex flex-row justify-content-center align-items-center">
                    <a class="nav-link" href="products.html">Products</a>
                </li>
                <li class="mt-2 px-2">
                    <span class="nav-separator d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">|</span>
                </li>
                <li class="nav-item text-center d-flex flex-row justify-content-center align-items-center">
                    <a class="nav-link" href="franchise.html">Franchise Opportunities</a>
                </li>
                <li class="mt-2 px-2">
                    <span class="nav-separator d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">|</span>
                </li>
                <li class="nav-item text-center d-flex flex-row justify-content-center align-items-center">
                    <a class="nav-link" id="contactUsNavItem">Contact Us</a>
                </li>
            </ul>
        </div>

    </div>
</nav>
    `);
}

function handleContactUsClick() {
    let fileName = location.pathname.split("/").slice(-1)[0]
    fileName = fileName.slice(0, fileName.indexOf('.'))
    
    $('#contactUsNavItem').click(function () {
        if (fileName === "home") {
            performScrollAnimation()
        } else {
            window.location.href = 'home.html#contact_card';
        }
    });
    
    console.log(fileName)
}

function performScrollAnimation() {
    $('html, body').animate({
        scrollTop: $('#contact_card').offset().top
    }, 10);
}

















    
