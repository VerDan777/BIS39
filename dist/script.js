
(function() {
    
    // alert(1);

    var mapdiv = document.querySelector(".map");

    function detectBrowser() {
        // var useragent = navigator.userAgent;

        // if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1) {
        //     mapdiv.style.width = '100%';
        //     mapdiv.style.height = '100%';
        // } else {
        //     mapdiv.style.width = '800px';
        //     mapdiv.style.height = '600px';
        // }

        // alert(1);
    }

    // detectBrowser();
    // initMap();
}());

function initMap() {
    var mapDiv = document.querySelector(".map");
    var map = new google.maps.Map(mapDiv, {
        zoom: 10, 
        center: {
            lat: 54.704,
            lng: 20.486
        }
    });
    google.maps.event.addDomListener(window, 'load', function () {
            var places = new google.maps.places.Autocomplete(document.getElementById('evac-from-input'));
            var places2 = new google.maps.places.Autocomplete(document.getElementById('evac-to-input'));
            google.maps.event.addListener(places, 'place_changed', function () {
                var place = places.getPlace();
                var address = place.formatted_address;
                var latitude = place.geometry.location.lat();
                var longitude = place.geometry.location.lng();
                var mesg = "Address: " + address;
                mesg += "\nLatitude: " + latitude;
                mesg += "\nLongitude: " + longitude;
                alert(mesg);
            });
        });
}

