function initialize() {
	var pinotrail = new google.maps.LatLng(35.1177076,-106.4869905)
	var openspace = new google.maps.LatLng(35.165073,-106.4573935)
	var southfoothills = new google.maps.LatLng(35.0923794,-106.4794007)
	var golden = new google.maps.LatLng(35.270894,-106.3300395)
	var guiterrez = new google.maps.LatLng(35.1256185,-106.3470961)
	var bosque = new google.maps.LatLng(35.1856764,-106.6520627)
	var juanthomas = new google.maps.LatLng(35.0023264,-106.3009887)
	var myOptions = {
		zoom: 11,
		center: pinotrail,
		mapTypeId: google.maps.MapTypeId.TERRAIN,
		
		styles: [
		
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
   {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#00ff00"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#00ffff"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
	  
    ]
  }
  ]
		};
		

	var map = new google.maps.Map(
		document.getElementById("map_canvas"), 
		myOptions);

	var juanthomasMarker = new google.maps.Marker({
		position: juanthomas,
		title:"Juan THomas Open Space"
		});
	juanthomasMarker.setMap(map);
	var southfoothillsMarker = new google.maps.Marker({
		position: southfoothills,
		title:"South Foothills Open Space"
		});
	southfoothillsMarker.setMap(map);
	var goldenMarker = new google.maps.Marker({
		position: golden,
		title:"Golden Open Space"
		});
	goldenMarker.setMap(map);
	var guiterrezMarker = new google.maps.Marker({
		position: guiterrez,
		title:"Guiterrez Open Space"
		});
	guiterrezMarker.setMap(map);
	var bosqueMarker = new google.maps.Marker({
		position: bosque,
		title:"Bosque Open Space"
		});
	bosqueMarker.setMap(map);


	var openspaceMarker = new google.maps.Marker({
		position: openspace,
		title:"Pino Trailhead from Elena Gallegos"
		});
	openspaceMarker.setMap(map);
	var layer = new google.maps.FusionTablesLayer({
    query: {
      select: '\'geometry\'',
      from: '1t_O7-oLOWMDIeuJDvnTG1PLYizjz_6fa9l-NuaMn'
    },
	styles: [{
      polygonOptions: {
      fillOpacity: 0.37
	  }
      }]
  });
  layer.setMap(map);
}
