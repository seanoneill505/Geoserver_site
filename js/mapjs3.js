function initialize() {
	var center = new google.maps.LatLng(36.060574,-107.961692)
	var mapOptions = {
		zoom: 18,
		center: center,
		mapTypeId: google.maps.MapTypeId.sattelite
	};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),
		mapOptions);
}
