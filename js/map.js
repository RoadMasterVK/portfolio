let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:53.266, lng: -6.267},
    zoom: 4
  });
}

function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        map.setCenter(currentLocation);
        map.setZoom(18 );

        new google.maps.Marker({
          position: currentLocation,
          map: map,
          title: 'My Location'
        });
      },
      function(error) {
        console.error(error);
      }
    );
  } else {
    alert('Geolocation is not supported by your browser.');
  }
}
