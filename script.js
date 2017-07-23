
// function initMap() {
//     var mapDiv = document.querySelector(".map");
//     var map = new google.maps.Map(mapDiv, {
//         zoom: 10, 
//         center: {
//             lat: 54.704,
//             lng: 20.486
//         }
//     });
var source, destination;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
google.maps.event.addDomListener(window, 'load', function () {
    new google.maps.places.SearchBox(document.getElementById('evac-from-input'));
    new google.maps.places.SearchBox(document.getElementById('evac-to-input'));
    directionsDisplay = new google.maps.DirectionsRenderer({ 'draggable': true });
});
 
function GetRoute() {
    var mumbai = new google.maps.LatLng(18.9750, 72.8258);
    var mapOptions = {
        zoom: 7,
        center: mumbai
    };
    map = new google.maps.Map(document.getElementById('dvMap'), mapOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('dvPanel'));
 
    //*********DIRECTIONS AND ROUTE**********************//
    source = document.getElementById("evac-from-input").value;
    destination = document.getElementById("evac-to-input").value;
 
    var request = {
        origin: source,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
 
    //*********DISTANCE AND DURATION**********************//
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [source],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, function (response, status) {
        if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
            var distance = response.rows[0].elements[0].distance.text;
            var duration = response.rows[0].elements[0].duration.text;
            var dvDistance = document.getElementById("sumdistance");
           dvDistance.innerHTML = "";
            dvDistance.innerHTML += "Distance: " + distance + "<br />";
            dvDistance.innerHTML += "Duration:" + duration;
 
        } else {
            alert("Unable to find the distance via road.");
        }
    });
}
    // google.maps.event.addDomListener(window, 'load', function () {
    //         var places = new google.maps.places.Autocomplete(document.getElementById('evac-from-input'));
    //         var places2 = new google.maps.places.Autocomplete(document.getElementById('evac-to-input'));
    //         var directionDisplay = new google.maps.DirectionsRender({'draggable':true});
    //         google.maps.event.addListener(places, 'place_changed', function () {
    //             var place = places.getPlace();
    //             var address = place.formatted_address;
    //             var latitude = place.geometry.location.lat();
    //             var longitude = place.geometry.location.lng();
    //             var mesg = "Address: " + address;
    //             mesg += "\nLatitude: " + latitude;
    //             mesg += "\nLongitude: " + longitude;
    //             alert(mesg);
    //         });
    //     });
    // function GetRoute() {
    //     var mumbai = new google.maps.LatLng(18.9750,72.8258);
    //     var mapOptions = {
    //         zoom: 7,
    //         center: mumbai
    // }
    //    var request = {
    //     origin: places,
    //     destination: places2,
    //     travelMode: google.maps.TravelMode.DRIVING
    // };
    // directionsService.route(request, function (response, status) {
    //     if (status == google.maps.DirectionsStatus.OK) {
    //         directionsDisplay.setDirections(response);
    //     }
    // });
    // var service = new google.maps.DistanceMatrixService();
    // service.DistanceMatrixService({
    //     origins: [places],
    //     destinations: [places2],
    //     travelMode: google.maps.TravelMode.DRIVING,
    //     unitSystem: google.maps.unitSystem.METRIC,
    //     avoidHighways: false,
    //     avoidTolls: false
    // },function(response,status) {
    //     if(status==google.maps.DistanceMatrixStatus.OK && response.row[0].elements[0].status !="ZERO_RESULTS") {
    //         var distance = response.row[0].elements[0].distance.text;
    //         var duration = response.row[0].elements[0].duration.text;
    //         var SumDistance = document.getElementById('sumdistance');
    //         SumDistance.innerHTML = '';
    //         SumDistance.innerHTML += "Distance:"+ distance + "</br>";
    //         SumDistance.innerHTML += "Duration:" + duration;
    //     } else {
    //         alert('Не найдено расстояние!')
    //     }
    // });

