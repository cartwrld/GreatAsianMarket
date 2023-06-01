"use strict"


class Location {
    constructor(address, phone, email) {
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
}

class Contact {
    constructor(name, message, email) {
        this.address = name;
        this.message = message;
        this.email = email;
    }
}

const locationCBO = $('#location_cbo');

$(function () {
    
    
    initMap();
    
    
    let currLocation = $(locationCBO).val();
    
    
    
});

$(locationCBO).change(function() {
    console.log("boof")
});



/**
 * Google Maps API to show the current location
 */
function initMap() {
    
    let lat = 52.114000;
    let lon = -106.626544;
    
    // Create a map object and specify the center coordinates and zoom level
    let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lon}, // Saskatoon East latitude/longitude
        zoom: 15
    });
    
    // Add a marker to the map
    let marker = new google.maps.Marker({
        position: {lat: lat, lng: lon}, // Saskatoon East latitude/longitude
        map: map,
        title: 'San Francisco'
    });
    
}
