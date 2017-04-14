var projection = ol.proj.get('EPSG:3857');

var Layer_Stamen_terrain = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'terrain'})
        })
    ]
});

var block_color = [0,255,0,.50]
var block_line_color = [0,100,0,1]
var county_color = [124,12,25,.25]
var county_line_color = [130,230,25,.40]


var county_style = new ol.style.Style({
	fill: new ol.style.Fill({
	  color: county_color
	}),
	stroke: new ol.style.Stroke({
	  color: county_line_color,
	  width: 2
	}),
});

var block_style = new ol.style.Style({
	fill: new ol.style.Fill({
	  color: block_color
	}),
	stroke: new ol.style.Stroke({
	  color: block_line_color,
	  width: 1
	}),
});


var classroomCoord = [-107.22,37.51]
var officeCoord = [-106.624899,35.084506]
var thirtymileCoord = [-107.2891604,37.7462422]

var classroomPoint = new ol.geom.Point(ol.proj.fromLonLat(classroomCoord, projection));
var officePoint = new ol.geom.Point(ol.proj.fromLonLat(officeCoord, projection));
var thirtymilePoint = new ol.geom.Point(ol.proj.fromLonLat(thirtymileCoord, projection));

var classroomFeature = new ol.Feature({
	geometry: classroomPoint
})

var officeFeature = new ol.Feature({
	geometry:officePoint
})
var thirtymileFeature = new ol.Feature({
	geometry: thirtymilePoint
})

var bldgFeature = new ol.Feature({
	geometry: new ol.geom.Polygon([[
	[-106.624921,35.084498],
	[-108.624911,35.084558 ],
	[-106.624970, 35.084566],
	[-106.624966, 35.084609],
	[-104.624383, 37.084544],
	[-106.624317, 35.084438],
	[-106.623922, 35.084384],
	[-106.623970, 35.084164],
	[-104.624324, 34.084214],
	[-106.624324, 35.084214],
	[-106.624284, 36.084391],
	[-107.2891604,37.7462422],
	]]).transform('EPSG:4326',projection), // deal with projection issues between my features and and the map projection 
	buildingNo:'106'
});
var pathFeature = new ol.Feature({
	geometry: new ol.geom.LineString([
		classroomCoord,
		[-107.22,37.51],
		[-106.624327,35.084445],
		officeCoord,
			
		
	]).transform('EPSG:4326',projection), // deal with projection issues between my features and and the map projection
	description:"my old commute"
})
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
		projection: projection
	})
})

var Coloradotrails = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: '7'
		}),
		params: {'LAYERS':'7'},
		url: 'https://services.nationalmap.gov/arcgis/services/transportation/MapServer/WmsServer?',
		serverType: 'geoserver',
		projection: projection
		
	})
})

var blocks_kml = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://s3.amazonaws.com/kkb-web/data/tl_2010_35001_tabblock10.kml',
		projection: projection,
		format: new ol.format.KML()
	})
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

var blocks_kml_styled = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://s3.amazonaws.com/kkb-web/data/tl_2010_35001_tabblock10.kml',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	}),
	style: block_style
})

var colohighways = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://data.colorado.gov/api/geospatial/trm9-dm4m?method=export&format=KML',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	}),
	
})
var colomunicipal = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://data.colorado.gov/api/geospatial/u943-ics6?method=export&format=KML',
		projection: projection,
		format: new ol.format.KML()
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
		features: [classroomFeature,officeFeature,bldgFeature,pathFeature,thirtymileFeature]
	})
})

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
  layers: [ Layer_Stamen_terrain,  blocks_kml_styled, local_geoms, colohighways,colomunicipal, colocounties, Coloradowms, Coloradoeco, Coloradotrails  ],
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

