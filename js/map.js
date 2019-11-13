      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center:{lat:47.5515, lng: -101.0020},
          zoom: 5
        });

        var	marker =  new google.maps.Marker( {
      		position:{lat:49.2827, lng: -123.1207},
      		map: map,
      		title: 'The Flash'
      	});
      	var infoWindow = new google.maps.InfoWindow(
      	{
      		content:"The Flash is flimed here","https://i.ebayimg.com/images/g/Z9wAAOSwBnZbDhDT/s-l64.jpg"
      	})
      	marker.addListener('click',function()
      	{
      		infoWindow.open(map,marker);
      	});
      }