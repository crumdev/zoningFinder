
/*
 * Use Ajax to get zoning data for builing in Jefferson CO from
 * http://louisville.lojic.opendata.arcgis.com/datasets/638546493a6f41c098c060eedda851af_0.geojson
 * then filter the results for zones that do not begin with "R" which stands for residential. The
 * remaining buildings shown on screen should be available for commercial use.
 *
 * Eventually would like to cross reference buildings that are available for sale in the Louisville
 * MLS system and only display the ones that are available for sale.
 */
var zoneUrl = "http://louisville.lojic.opendata.arcgis.com/datasets/638546493a6f41c098c060eedda851af_0.geojson";
var zoneData = [];
$('.loading').show();
$.ajax({
    type: "GET",
    url: zoneUrl,
    dataType: "json",
    success: function(data) {
      $('.loading').hide();
      var i=0;
      while(i < 20){
        $.each(data.features, function(index, value){
          alert(value.type);
        });
      }
    }
});
