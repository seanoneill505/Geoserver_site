var projection = ol.proj.get('EPSG:3857');

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

var Coloradowms = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'USGS_EROS_Ortho_1Foot'
		}),
		params: {'LAYERS':'0'},
		url: 'https://isse.cr.usgs.gov/arcgis/services/Orthoimagery/USGS_EROS_Ortho_1Foot/ImageServer/WMSServer',
		serverType: 'geoserver',
		projection: projection
	})
})

var Coloradoeco = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: '2'
		}),
		params: {'LAYERS':'2'},
		url: 'https://services.nationalmap.gov/arcgis/services/transportation/MapServer/WmsServer?',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:true
		})
	}),
	style: block_line_color
})
var Coloradotforestroads = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: '4'
		}),
		params: {'LAYERS':'4'},
		url: 'https://services.nationalmap.gov/arcgis/services/transportation/MapServer/WmsServer?',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:true
		})
	}),
	style: froad_style
})

var Coloradotfrnumbers = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: '12'
		}),
		params: {'LAYERS':'12'},
		url: 'https://services.nationalmap.gov/arcgis/services/transportation/MapServer/WmsServer?',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	}),
	style: froad_style
})

var Coloradoroads = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: '7'
		}),
		params: {'LAYERS':'7'},
		url: 'https://services.nationalmap.gov/arcgis/services/transportation/MapServer/WmsServer?',
		serverType: 'geoserver',
		projection: projection
		
	}),
})



var states_single = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		attributions: new ol.Attribution({
			html: 'State Boundary Restructured - USGS, National Atlas Release 5-14-12'
		}),
		params: {'LAYERS':'global:statep010'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/global/wms?',
		serverType: 'geoserver'
	})
})



var colohighways = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://data.colorado.gov/api/geospatial/trm9-dm4m?method=export&format=KML',
		style: Lake_style,
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
	
})
var colomunicipal = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://data.colorado.gov/api/geospatial/u943-ics6?method=export&format=KML',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:true
		})
	})
	
})

var colocounties = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://data.colorado.gov/api/geospatial/67vn-ijga?method=export&format=KML',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	}),
	style: county_style
})

var local_geoms = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: [valleFeature],
		projection: projection,
		
	}),
	style: Lake_style
})

var Plat_geom = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: [platFeature],
		projection: projection,
		
	}),
	style: lake2_style
})

var rio_geom = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: [riogFeature],
		projection: projection,
		
	}),
	style: lake3_style
})

var will_geom = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: [willFeature],
		projection: projection,
		
	}),
	style: lake4_style
})

var meadows_geom = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: [meadowsFeature],
		projection: projection,
		
	}),
	style: lake6_style
})



var map = new ol.Map({
  target: 'map_canvas',
  layers: [ Layer_Stamen_terrain,colomunicipal, colocounties, Coloradoeco, Coloradoroads, Coloradotforestroads, Coloradotfrnumbers, local_geoms],
  view: new ol.View({
    center: ol.proj.fromLonLat([-107.22,37.51]), 
    zoom: 10
	
  })
});


