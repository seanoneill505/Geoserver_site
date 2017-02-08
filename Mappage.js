function initialize() {
	var classroom = new google.maps.LatLng(35.1177076,-106.4869905)
	var mapOptions = {
		zoom: 12,
		center: classroom,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),
		mapOptions);
}

