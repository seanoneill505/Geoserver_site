function initialize() {
	var center = new google.maps.LatLng(36.060574,-107.961692)
	var mapOptions = {
		zoom: 18,
		center: center,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),
		mapOptions);
		var center = new google.maps.Marker({
		position: center,
		title:"Pueblo Bonito"
		});
		var centerInfoContent = '<div class="infoBox">' +
		'<p>Pueblo Bonito</p>' +
		'<iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1489694318567!6m8!1m7!1sF%3A-Bdpm7Bqgy1M%2FV-9eX7DvRUI%2FAAAAAAADZqI%2F5WW92SPZ9Akd1AMJSQTgD0nOx6Ba3572wCLIB!2m2!1d36.06061589999999!2d-107.9617551!3f345.7795903667379!4f0!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
		'</div>';
		var centerInfoWindow = new google.maps.InfoWindow({
		content: centerInfoContent
		});
	google.maps.event.addListener(center, 'click', function() {
		centerInfoWindow.open(map,center);
		});
	center.setMap(map);
}
