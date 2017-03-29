var Layer_Stamen_terrain = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'terrain'})
        })
    ]
});

var Layer_watercolor = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'watercolor'})
        })
    ]
});
var Layer_toner = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'toner'})
        })
    ]
});

var map = new ol.Map({
  target: 'map_canvas',
  view: new ol.View({
    center: ol.proj.fromLonLat([-107.22,37.51]), 
    zoom: 10
  })
});

function setMapType(newType) {
    if(newType == 'watercolor') {
        map.setLayerGroup(Layer_watercolor);
    } else if (newType == 'STAMEN_terrain') {
        map.setLayerGroup(Layer_Stamen_terrain);
	}	else if (newType == 'toner') {
        map.setLayerGroup(Layer_toner);
    }
}

setMapType('STAMEN_terrain')
