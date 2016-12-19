
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat:34, lng: 37.13426},
    disableDefaultUI: true, // a way to quickly hide all controls

        });
      }

var currentPosition = {lat:33.51515, lng: 36.39313};
var person = null;

$( document ).ready(function() {
	$( "#search" ).click(function() {
        var flightPlanCoordinates = [
			{lat:36.2021, lng: 37.13426},
          {lat:36.1929, lng: 37.1126},
          {lat:35.8080, lng: 37.2550},
          {lat:35.5412, lng: 37.3160},
          {lat:34.7883, lng: 36.7216},
          {lat:33.5133, lng: 36.2767}
          //{lat: -18.142, lng: 178.431},
          //{lat: -27.467, lng: 153.027}
        ];

		var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

        
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        var image = 'images/walking.png';
        person = new google.maps.Marker({
          position: {lat:36.2021, lng: 37.13426},
          map: map,
          icon: image
        });

        var image = 'images/location-icon.png';
        var beachMarker2 = new google.maps.Marker({
          position:  {lat:33.5133, lng: 36.2767},
          map: map,
          icon: image
        });

        var image = 'images/market.png';
        var beachMarker3 = new google.maps.Marker({
          position:  {lat:35.8080, lng: 37.2550},
          map: map,
          icon: image
        });

        var image = 'images/restaurante.gif';
        var beachMarker5 = new google.maps.Marker({
         position:  {lat:34.8080, lng: 37.2550},
         map: map,
          icon: image
        });

        var image = 'images/Warning.png';
        var beachMarker6 = new google.maps.Marker({
          position:  {lat:33.8080, lng: 36.2550},
          map: map,
          icon: image
        });
        
        var image = 'images/hotel.png';
        var beachMarker6 = new google.maps.Marker({
         position:  {lat:34.1080, lng: 36.8},
        map: map,
         icon: image
        });

        flightPath.setMap(map);
         

	});




});

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        break;

        case 38: // up
			console.log(person);
        break;

        case 39: // right
        break;

        case 40: // down
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
