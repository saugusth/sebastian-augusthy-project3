      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center:{lat:47.5515, lng: -101.0020},
          zoom: 4.5
        });

        /*var	marker =  new google.maps.Marker( {
      		position:{lat:49.2827, lng: -123.1207},
      		map: map,
      		title: 'The Flash'
      	});
      	var infoWindow = new google.maps.InfoWindow(
      	{
      		content:"The Flash is flimed here"
      	})
      	marker.addListener('click',function()
      	{
      		infoWindow.open(map,marker);
      	});*/
      	//add marker function
      	addMarker({coords:{lat:49.2827, lng: -123.1207}},
      	);
      	addMarker({coords:{lat:41.8781, lng: -87.6298}});
      	addMarker({coords:{lat:33.7490, lng: -84.3880}});
      	function addMarker(props){
					var	marker =  new google.maps.Marker( {
      			position:props.coords,
      			map: map
      		});
      	}
      }