ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-38.700108, -13.012600, -38.294445, -12.726324]);
var wms_layers = [];

var format_Recortado_0 = new ol.format.GeoJSON();
var features_Recortado_0 = format_Recortado_0.readFeatures(json_Recortado_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Recortado_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recortado_0.addFeatures(features_Recortado_0);
var lyr_Recortado_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Recortado_0, 
                style: style_Recortado_0,
                interactive: true,
    title: 'Recortado<br />\
    <img src="styles/legend/Recortado_0_0.png" /> Domínio das Bacias Sedimentares<br />\
    <img src="styles/legend/Recortado_0_1.png" /> Domínio das Coberturas Detrtíticas<br />\
    <img src="styles/legend/Recortado_0_2.png" /> Domínio do Embasamento Cristalino<br />\
    <img src="styles/legend/Recortado_0_3.png" /> <br />'
        });
var format_Limssa_1 = new ol.format.GeoJSON();
var features_Limssa_1 = format_Limssa_1.readFeatures(json_Limssa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Limssa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limssa_1.addFeatures(features_Limssa_1);
var lyr_Limssa_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limssa_1, 
                style: style_Limssa_1,
                interactive: true,
                title: '<img src="styles/legend/Limssa_1.png" /> Limssa'
            });
var format_Recortado_2 = new ol.format.GeoJSON();
var features_Recortado_2 = format_Recortado_2.readFeatures(json_Recortado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Recortado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recortado_2.addFeatures(features_Recortado_2);
var lyr_Recortado_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Recortado_2, 
                style: style_Recortado_2,
                interactive: true,
                title: '<img src="styles/legend/Recortado_2.png" /> Recortado'
            });

lyr_Recortado_0.setVisible(true);lyr_Limssa_1.setVisible(true);lyr_Recortado_2.setVisible(true);
var layersList = [lyr_Recortado_0,lyr_Limssa_1,lyr_Recortado_2];
lyr_Recortado_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PROVINCIA': 'PROVINCIA', 'SIGLA_UNID': 'SIGLA_UNID', 'NOME_UNIDA': 'NOME_UNIDA', 'HIERARQUIA': 'HIERARQUIA', 'IDADE_MAXI': 'IDADE_MAXI', 'ERRO_IDADE': 'ERRO_IDADE', 'METODO_DET': 'METODO_DET', 'EON_IDADE_': 'EON_IDADE_', 'ERA_IDADE_': 'ERA_IDADE_', 'PERIODO_ID': 'PERIODO_ID', 'EPOCA_IDAD': 'EPOCA_IDAD', 'SISTEMA_ID': 'SISTEMA_ID', 'QUALIDADE_': 'QUALIDADE_', 'IDADE_MINI': 'IDADE_MINI', 'ORIGEM': 'ORIGEM', 'LITOTIPO1': 'LITOTIPO1', 'LITOTIPO2': 'LITOTIPO2', 'CLASSE1': 'CLASSE1', 'CLASSE2': 'CLASSE2', 'SUBCLASSE1': 'SUBCLASSE1', 'SUBCLASSE2': 'SUBCLASSE2', 'Cod_Domini': 'Cod_Domini', 'Dominios': 'Dominios', 'Cod_Subdom': 'Cod_Subdom', 'Subdominio': 'Subdominio', 'Legenda': 'Legenda', });
lyr_Limssa_1.set('fieldAliases', {'ID': 'ID', 'nm_nome': 'nm_nome', 'geocodigo': 'geocodigo', 'UF': 'UF', 'populacao2': 'populacao2', 'area_ofici': 'area_ofici', 'data_alter': 'data_alter', 'metodo_alt': 'metodo_alt', 'fonte_info': 'fonte_info', });
lyr_Recortado_2.set('fieldAliases', {'POCO': 'POCO', 'LATDECIMAL': 'LATDECIMAL', 'LONGDECIMA': 'LONGDECIMA', 'LOCAL': 'LOCAL', 'MUNICIP': 'MUNICIP', 'PROFUNDO': 'PROFUNDO', 'SOLIDOSTOT': 'SOLIDOSTOT', 'VAZAO': 'VAZAO', 'NE': 'NE', 'ND': 'ND', 'Legenda': 'Legenda', });
lyr_Recortado_0.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PROVINCIA': 'TextEdit', 'SIGLA_UNID': 'TextEdit', 'NOME_UNIDA': 'TextEdit', 'HIERARQUIA': 'TextEdit', 'IDADE_MAXI': 'TextEdit', 'ERRO_IDADE': 'TextEdit', 'METODO_DET': 'TextEdit', 'EON_IDADE_': 'TextEdit', 'ERA_IDADE_': 'TextEdit', 'PERIODO_ID': 'TextEdit', 'EPOCA_IDAD': 'TextEdit', 'SISTEMA_ID': 'TextEdit', 'QUALIDADE_': 'TextEdit', 'IDADE_MINI': 'TextEdit', 'ORIGEM': 'TextEdit', 'LITOTIPO1': 'TextEdit', 'LITOTIPO2': 'TextEdit', 'CLASSE1': 'TextEdit', 'CLASSE2': 'TextEdit', 'SUBCLASSE1': 'TextEdit', 'SUBCLASSE2': 'TextEdit', 'Cod_Domini': 'TextEdit', 'Dominios': 'TextEdit', 'Cod_Subdom': 'TextEdit', 'Subdominio': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_Limssa_1.set('fieldImages', {'ID': 'TextEdit', 'nm_nome': 'TextEdit', 'geocodigo': 'TextEdit', 'UF': 'TextEdit', 'populacao2': 'TextEdit', 'area_ofici': 'TextEdit', 'data_alter': 'TextEdit', 'metodo_alt': 'TextEdit', 'fonte_info': 'TextEdit', });
lyr_Recortado_2.set('fieldImages', {'POCO': '', 'LATDECIMAL': '', 'LONGDECIMA': '', 'LOCAL': '', 'MUNICIP': '', 'PROFUNDO': '', 'SOLIDOSTOT': '', 'VAZAO': '', 'NE': '', 'ND': '', 'Legenda': '', });
lyr_Recortado_0.set('fieldLabels', {'AREA': 'inline label', 'PERIMETER': 'inline label', 'PROVINCIA': 'inline label', 'SIGLA_UNID': 'inline label', 'NOME_UNIDA': 'inline label', 'HIERARQUIA': 'inline label', 'IDADE_MAXI': 'inline label', 'ERRO_IDADE': 'inline label', 'METODO_DET': 'inline label', 'EON_IDADE_': 'inline label', 'ERA_IDADE_': 'inline label', 'PERIODO_ID': 'inline label', 'EPOCA_IDAD': 'inline label', 'SISTEMA_ID': 'inline label', 'QUALIDADE_': 'inline label', 'IDADE_MINI': 'inline label', 'ORIGEM': 'inline label', 'LITOTIPO1': 'inline label', 'LITOTIPO2': 'inline label', 'CLASSE1': 'inline label', 'CLASSE2': 'inline label', 'SUBCLASSE1': 'inline label', 'SUBCLASSE2': 'inline label', 'Cod_Domini': 'inline label', 'Dominios': 'inline label', 'Cod_Subdom': 'inline label', 'Subdominio': 'inline label', 'Legenda': 'inline label', });
lyr_Limssa_1.set('fieldLabels', {'ID': 'inline label', 'nm_nome': 'inline label', 'geocodigo': 'inline label', 'UF': 'inline label', 'populacao2': 'inline label', 'area_ofici': 'inline label', 'data_alter': 'inline label', 'metodo_alt': 'inline label', 'fonte_info': 'inline label', });
lyr_Recortado_2.set('fieldLabels', {'POCO': 'inline label', 'LATDECIMAL': 'inline label', 'LONGDECIMA': 'inline label', 'LOCAL': 'inline label', 'MUNICIP': 'inline label', 'PROFUNDO': 'inline label', 'SOLIDOSTOT': 'inline label', 'VAZAO': 'inline label', 'NE': 'inline label', 'ND': 'inline label', 'Legenda': 'inline label', });
lyr_Recortado_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});