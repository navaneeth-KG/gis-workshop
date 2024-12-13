var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_streams_1 = new ol.format.GeoJSON();
var features_streams_1 = format_streams_1.readFeatures(json_streams_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_streams_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_streams_1.addFeatures(features_streams_1);
var lyr_streams_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_streams_1, 
                style: style_streams_1,
                popuplayertitle: "streams",
                interactive: true,
                title: '<img src="styles/legend/streams_1.png" /> streams'
            });
var format_waterbody_2 = new ol.format.GeoJSON();
var features_waterbody_2 = format_waterbody_2.readFeatures(json_waterbody_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterbody_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterbody_2.addFeatures(features_waterbody_2);
var lyr_waterbody_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterbody_2, 
                style: style_waterbody_2,
                popuplayertitle: "waterbody",
                interactive: true,
                title: '<img src="styles/legend/waterbody_2.png" /> waterbody'
            });
var format_buildings_3 = new ol.format.GeoJSON();
var features_buildings_3 = format_buildings_3.readFeatures(json_buildings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_3.addFeatures(features_buildings_3);
var lyr_buildings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_3, 
                style: style_buildings_3,
                popuplayertitle: "buildings",
                interactive: true,
                title: '<img src="styles/legend/buildings_3.png" /> buildings'
            });
var format_roads_4 = new ol.format.GeoJSON();
var features_roads_4 = format_roads_4.readFeatures(json_roads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_4.addFeatures(features_roads_4);
var lyr_roads_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_4, 
                style: style_roads_4,
                popuplayertitle: "roads",
                interactive: true,
                title: '<img src="styles/legend/roads_4.png" /> roads'
            });
var format_railway_line_5 = new ol.format.GeoJSON();
var features_railway_line_5 = format_railway_line_5.readFeatures(json_railway_line_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_line_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_line_5.addFeatures(features_railway_line_5);
var lyr_railway_line_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railway_line_5, 
                style: style_railway_line_5,
                popuplayertitle: "railway_line",
                interactive: true,
                title: '<img src="styles/legend/railway_line_5.png" /> railway_line'
            });
var format_Bus_stops_6 = new ol.format.GeoJSON();
var features_Bus_stops_6 = format_Bus_stops_6.readFeatures(json_Bus_stops_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bus_stops_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bus_stops_6.addFeatures(features_Bus_stops_6);
var lyr_Bus_stops_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bus_stops_6, 
                style: style_Bus_stops_6,
                popuplayertitle: "Bus_stops",
                interactive: true,
                title: '<img src="styles/legend/Bus_stops_6.png" /> Bus_stops'
            });

lyr_OSMStandard_0.setVisible(true);lyr_streams_1.setVisible(true);lyr_waterbody_2.setVisible(true);lyr_buildings_3.setVisible(true);lyr_roads_4.setVisible(true);lyr_railway_line_5.setVisible(true);lyr_Bus_stops_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_streams_1,lyr_waterbody_2,lyr_buildings_3,lyr_roads_4,lyr_railway_line_5,lyr_Bus_stops_6];
lyr_streams_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'salt': 'salt', 'level': 'level', 'name_en': 'name_en', 'name': 'name', 'tunnel': 'tunnel', 'layer': 'layer', });
lyr_waterbody_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'natural': 'natural', 'water': 'water', 'name_ml': 'name_ml', 'name': 'name', });
lyr_buildings_3.set('fieldAliases', {'osm_id': 'osm_id', 'building': 'building', });
lyr_roads_4.set('fieldAliases', {'osm_id': 'osm_id', 'highway': 'highway', 'foot': 'foot', 'bicycle': 'bicycle', 'bridge': 'bridge', 'level': 'level', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'oneway': 'oneway', });
lyr_railway_line_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'proposed': 'proposed', 'name': 'name', 'layer': 'layer', 'service': 'service', 'voltage': 'voltage', 'usage': 'usage', 'passenger_': 'passenger_', 'gauge': 'gauge', 'frequency': 'frequency', 'electrifie': 'electrifie', });
lyr_Bus_stops_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'operator': 'operator', 'name_ml': 'name_ml', 'bench': 'bench', 'public_tra': 'public_tra', 'bus': 'bus', 'name': 'name', });
lyr_streams_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'waterway': 'TextEdit', 'salt': 'TextEdit', 'level': 'TextEdit', 'name_en': 'TextEdit', 'name': 'TextEdit', 'tunnel': 'TextEdit', 'layer': 'TextEdit', });
lyr_waterbody_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'natural': 'TextEdit', 'water': 'TextEdit', 'name_ml': 'TextEdit', 'name': 'TextEdit', });
lyr_buildings_3.set('fieldImages', {'osm_id': 'TextEdit', 'building': 'TextEdit', });
lyr_roads_4.set('fieldImages', {'osm_id': 'TextEdit', 'highway': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'bridge': 'TextEdit', 'level': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', 'oneway': 'TextEdit', });
lyr_railway_line_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'railway': 'TextEdit', 'proposed': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'service': 'TextEdit', 'voltage': 'TextEdit', 'usage': 'TextEdit', 'passenger_': '', 'gauge': 'TextEdit', 'frequency': 'TextEdit', 'electrifie': '', });
lyr_Bus_stops_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'operator': 'TextEdit', 'name_ml': 'TextEdit', 'bench': 'TextEdit', 'public_tra': 'TextEdit', 'bus': 'TextEdit', 'name': 'TextEdit', });
lyr_streams_1.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'inline label - always visible', 'waterway': 'inline label - visible with data', 'salt': 'inline label - visible with data', 'level': 'inline label - visible with data', 'name_en': 'inline label - visible with data', 'name': 'inline label - visible with data', 'tunnel': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_waterbody_2.set('fieldLabels', {'full_id': 'inline label - visible with data', 'osm_id': 'inline label - visible with data', 'osm_type': 'inline label - visible with data', 'natural': 'inline label - visible with data', 'water': 'inline label - visible with data', 'name_ml': 'inline label - visible with data', 'name': 'header label - visible with data', });
lyr_buildings_3.set('fieldLabels', {'osm_id': 'no label', 'building': 'inline label - visible with data', });
lyr_roads_4.set('fieldLabels', {'osm_id': 'hidden field', 'highway': 'inline label - visible with data', 'foot': 'inline label - visible with data', 'bicycle': 'inline label - visible with data', 'bridge': 'inline label - visible with data', 'level': 'inline label - visible with data', 'name': 'inline label - visible with data', 'maxspeed': 'inline label - visible with data', 'lanes': 'inline label - visible with data', 'oneway': 'inline label - visible with data', });
lyr_railway_line_5.set('fieldLabels', {'full_id': 'inline label - visible with data', 'osm_id': 'inline label - visible with data', 'osm_type': 'inline label - visible with data', 'railway': 'inline label - visible with data', 'proposed': 'inline label - visible with data', 'name': 'header label - visible with data', 'layer': 'inline label - visible with data', 'service': 'inline label - visible with data', 'voltage': 'inline label - visible with data', 'usage': 'inline label - visible with data', 'passenger_': 'inline label - visible with data', 'gauge': 'inline label - visible with data', 'frequency': 'inline label - visible with data', 'electrifie': 'inline label - visible with data', });
lyr_Bus_stops_6.set('fieldLabels', {'full_id': 'inline label - visible with data', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'inline label - visible with data', 'operator': 'inline label - visible with data', 'name_ml': 'inline label - visible with data', 'bench': 'inline label - visible with data', 'public_tra': 'inline label - visible with data', 'bus': 'inline label - visible with data', 'name': 'header label - visible with data', });
lyr_Bus_stops_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});