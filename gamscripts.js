"use strict"

class Contact {
    constructor(name, message, email) {
        this.name = name;
        this.message = message;
        this.email = email;
    }
}

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
    
    estLocationList()
    console.log("finished")
    loadMap(locationList[0]).then(
    
    $('#contactUsNavItem').click(function() {
        
        let $this = $(this);
        
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: $this.offset().top + $('#contact_card').offset().top
            }, 500, 'easeout')
        }, 10)
    }));
    
    
});


/**
 * Google Maps API to show the current location that is selected in the <select> element
 */
async function initMap() {
    estLocationList();
    
    let lat = locationList[0].latitude
    let lon = locationList[0].longitude

    // Create a map object and specify the center coordinates and zoom level
    let initMap = await new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lon}, // Saskatoon East latitude/longitude
        zoom: 15
    });

    // Add a marker to the map
    let initMarker = await new google.maps.Marker({
        position: {lat: lat, lng: lon}, // Saskatoon East latitude/longitude
        map: initMap,
        title: `${location.storeName}`
    });
    
}



/**
 * Google Maps API to show the current location that is selected in the <select> element
 */
async function loadMap(location) {
    
    let lat = location.latitude
    let lon = location.longitude
    
    // Create a map object and specify the center coordinates and zoom level
    map = await new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lon}, // Saskatoon East latitude/longitude
        zoom: 15
    });
    
    // Add a marker to the map
    marker = await new google.maps.Marker({
        position: {lat: lat, lng: lon}, // Saskatoon East latitude/longitude
        map: map,
        title: `${location.storeName}`
    });
    
}

$(locationCBO).change(function () {
    
    let street = $('#loc_street')
    let cpp = $('#loc_cpp')
    let phone = $('#loc_phone')
    let email = $('#loc_email')
    
    console.log($(locationCBO).val());
    
    for (let location of locationList) {
        
        if ($(locationCBO).val() === location.id) {
            street.text(`${location.streetAddress}`);
            cpp.text(`${location.citydetails}`);
            phone.text(`${location.phone}`);
            email.text(`${location.email}`);
            
            loadMap(location);
        }
        
    }
});
function estLocationList() {
    
    
    locationList.push(new Location(
        "SE",
        "Saskatoon East - Store",
        "1110 Grosvenor Ave",
        "Saskatoon, SK S7H 4G1",
        "306-952-3377",
        "gamskoffice@gmail.com",
        52.114032,
        -106.626533
    ));
    
    locationList.push(new Location(
        "SW",
        "Saskatoon West - Store",
        "17-15 Worobetz Place",
        "Saskatoon, SK S7L 6R4",
        "306-952-0100",
        "gamskoffice@gmail.com",
        52.130063,
        -106.726319
    ));
    
    locationList.push(new Location(
        "RE",
        "Regina East- Store",
        "2410 Victoria Ave E",
        "Regina, SK S4N 6M5",
        "306-761-0096",
        "gamskoffice@gmail.com",
        50.448121,
        -104.548216
    ));
    
    locationList.push(new Location(
        "RN",
        "Regina North - Store ",
        "2510 3rd Avenue N",
        "Regina, SK S4R 5X5",
        "306-559-6789",
        "gamskoffice@gmail.com",
        50.474267,
        -104.616656
    ));
    
    locationList.push(new Location(
        "PA",
        "Prince Albert - Store",
        "2901 2 Avenue W",
        "Prince Albert, SK S6V 7R2",
        "306-970-8182",
        "gamskoffice@gmail.com",
        53.186472,
        -105.761916
    ));
    
    locationList.push(new Location(
        "WA",
        "GAM Trading Ltd. - Warehouse",
        "227 Venture Crescent",
        "Saskatoon, SK S7K 6N8",
        "306-979-0050",
        "gamskoffice@gmail.com",
        52.155918,
        -106.654269
    ));
    
}