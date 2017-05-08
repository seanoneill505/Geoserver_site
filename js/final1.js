
var projection = ol.proj.get('EPSG:2258');

var Layer_Stamen_terrain = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'terrain'})
        })
    ]
});


var basemap_tiled = new ol.layer.Tile({
	source: new ol.source.TileWMS({
	url: 'https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WmsServer?',
	  params: {
		LAYERS: 0,
		FORMAT: 'image/png',
		TRANSPARENT: true
	  },
	  attributions: [
	    new ol.Attribution({
		  html: 'Data provided by the <a href="http://basemap.nationalmap.gov">National Map</a>.'
		})
	  ]
	})
})




var USFSNM = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: '4'
		}),
		params: {'LAYERS':'ws_ronbeel:USFS_admin_bndR3'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	}),

})

var NMwilderness3 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: '12'
		}),
		params: {'LAYERS':'ws_ronbeel:nlcs_wilderness_areas_2014'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	}),
})

var NMwilderness = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: '7'
		}),
		params: {'LAYERS':'ws_ronbeel:USFSRegion3Wilderness'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver',
		projection: projection
		
	}),
	
})

var irasda = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: '7'
		}),
		params: {'LAYERS':'ws_ronbeel:irasda_nm_dd'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver',
		projection: projection
		
	}),
	
})

var cont_divide = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		attributions: new ol.Attribution({
			html: 'State Boundary Restructured - USGS, National Atlas Release 5-14-12'
		}),
		params: {'LAYERS':'ws_ronbeel:nm_cont_div'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver'
	})
})






var map = new ol.Map({
  target: 'map_canvas',
  layers: [ Layer_Stamen_terrain, USFSNM, irasda, NMwilderness, cont_divide,  NMwilderness3],
  view: new ol.View({
    center: ol.proj.fromLonLat([-105.918167,34.593986]), 
    zoom: 7
	
  })
});

