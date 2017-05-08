var projection = ol.proj.get('EPSG:2258');

var Layer_Stamen_terrain = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'terrain'})
        })
    ]
});







var SO35106A6 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: '4'
		}),
		params: {'LAYERS':'ws_ronbeel:SO_35106-A5_CONTV2'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	}),

})

var SO35106A5 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: '12'
		}),
		params: {'LAYERS':'	ws_ronbeel:SO_35106-A6_CONTV2'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	}),
})

var SO35106A6CONT = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: '7'
		}),
		params: {'LAYERS':'ws_ronbeel:SO_35106-A6_CONT'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver',
		projection: projection
		
	}),
	
})

var SO35106A5CONT = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: '7'
		}),
		params: {'LAYERS':'	ws_ronbeel:SO_35106-A5_CONT'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver',
		projection: projection
		
	}),
	
})

var SOtgr2006sebernlka = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		attributions: new ol.Attribution({
			html: 'State Boundary Restructured - USGS, National Atlas Release 5-14-12'
		}),
		params: {'LAYERS':'	ws_ronbeel:SO_tgr2006se_bern_lka'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver'
	})
})






var map = new ol.Map({
  target: 'map_canvas',
  layers: [ Layer_Stamen_terrain, SO35106A5, SO35106A6 ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-106.6298957,35.0754534]), 
    zoom: 12
	
  })
});
