      var map;

      function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
              center: { lat: 47.5515, lng: -101.0020 },
              zoom: 4
          });

          var marker = new google.maps.Marker({
              position: { lat: 49.2827, lng: -123.1207 },
              map: map,
              title: 'The Flash',
              icon: 'https://i.imgur.com/nwm2F14.jpg'
          });
          var infoWindow = new google.maps.InfoWindow({
              content: "The Flash is flimed in Vancouver"
          })
          marker.addListener('click', function() {
              infoWindow.open(map, marker);
          });

          var marker1 = new google.maps.Marker({
              position: { lat: 41.8781, lng: -87.6298 },
              map: map,
              title: 'Batwomen',
              icon: 'https://i.imgur.com/cdvl134.jpg'
          });
          var infoWindow1 = new google.maps.InfoWindow({
              content: "Batwomen is flimed in Chicago"
          })
          marker1.addListener('click', function() {
              infoWindow1.open(map, marker1);
          });

          var marker2 = new google.maps.Marker({
              position: { lat: 33.7490, lng: -84.3880 },
              map: map,
              title: 'Black Lightning',
              icon: 'https://i.imgur.com/T5jMGLo.jpg'
          });
          var infoWindow2 = new google.maps.InfoWindow({
              content: "Black Lightning is flimed in Atlanta"
          })
          marker2.addListener('click', function() {
              infoWindow2.open(map, marker2);
          });
      }