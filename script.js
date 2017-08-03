// var source, destination;
// var directionsDisplay;


// function initMap() {
//     var directionsService = new google.maps.DirectionsService();
// google.maps.event.addDomListener('window','load',function() {
//     new google.maps.places.SearchBox(document.getElementById('evac-from-input'));
//     new google.maps.places.SearchBox(document.getElementById('evac-to-input'));
//     directionsDisplay = new google.maps.DirectionsRender({draggable: true});
// }); 
//     var mapDiv = document.querySelector(".map");
//     var map = new google.maps.Map(mapDiv, {
//         zoom: 10,
//         center: {
//             lat: 54.704,
//             lng: 20.486
//         }
//     });
//     directionsDisplay.setMap(map);
//     directionsDisplay.setPanel(document.getElementById('dvPanel'));
//     //Directions and display 
//     source = document.getElementById('evac-from-input').value;
//     destination = document.getElementById('evac-to-input').value;
//     var request = {
//         origin: source,
//         destination: destination,
//         travelMode: google.maps.TravelMode.DRIVING
//     };
//     directionsService.route(request,function(response,status){
//         if(status==google.maps.DirectionsStatus.OK) {
//             directionsDisplay.setDirections(response);
//         }
//     });

//     //*******DISTANCE AND DURATION********
//     var service = new google.maps.DistanceMatrixService();
//     service.getDistanceMatrix({
//         origins: [source],
//         destinations: [destination],
//         travelMode: google.maps.TravelMode.DRIVING,
//         unitSystem: google.maps.UnitSystem.METRIC,
//         avoidHighways: false,
//         avoidTolls: false
//     },function(response,status){
//         if(status== google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status !="ZERO_RESULTS") {
//             var distance = response.rows[0].elements[0].distance.text;
//             var duration = response.rows[0].elements[0].duration.text;
//             var dvDistance = document.getElementById('dvDistance');
//         }else {
//             alert("Unable to find the distance via road");
//         }
//     })


// }
   function initMap() {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.querySelector('.map'), {
          zoom: 7,
          center: {lat: 41.85, lng: -87.65}
        });
        directionsDisplay.setMap(map);

        var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        var button = document.getElementById('button');
        button.addEventListener('click',onChangeHandler);
        // document.getElementById('start').addEventListener('change', onChangeHandler);
        // document.getElementById('end').addEventListener('change', onChangeHandler);
      }

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }