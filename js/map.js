      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center:{lat:47.5515, lng: -101.0020},
          zoom: 5
        });
      }

      var	marker =  new google.maps.marker( {
      	position:{}
      });