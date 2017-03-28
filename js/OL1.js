var myMap = new ol.Map({
	target: 'map_canvas',
	layers: [
  		new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'terrain'})
        })
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([-107.22,37.51]),
		zoom: 10
		})
	});
setMapType('STAMEN_Terrain')
