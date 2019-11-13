      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center:{lat:43.9695, lng: -99.9018},
          zoom: 5
        });
      }

      var	marker =  new google.maps.marker( {
      	position:{}
      });