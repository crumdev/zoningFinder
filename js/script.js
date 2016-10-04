
/*
 * Global Variables
 */
var homes;
var homeArray = [];
var zones;
var zoneArray = [];

/*
 * AJAX Requests
 */
var xhr_zones = new XMLHttpRequest();
xhr_zones.onreadystatechange = function () {
    if(xhr_zones.readyState === 4) {
        if (xhr_zones.status === 200){
            var data = JSON.parse(xhr_zones.responseText);
            createZoningList(data);
        } else {
            alert(xhr_zones.response);
        }
    }
};
xhr_zones.open('GET', 'data/zoning_data.json');
xhr_zones.send();

var xhr_homes = new XMLHttpRequest();
xhr_homes.onreadystatechange = function () {
    if(xhr_homes.readyState === 4) {
        if(xhr_homes.status === 200) {
            var data = JSON.parse(xhr_homes.responseText);
            createHomesList(data);
        } else {
            alert(xhr_homes.response);
        }
    }
};
xhr_homes.open('GET', 'data/homes.json');
xhr_homes.send();

/*
 * Custom functions
 */
function createZoningList(data) {
    zones = data;
    var zoneAddress;
    for (var i = 0; i< zones.features.length; i++) {
         zoneAddress = zones.features[i].properties.HOUSENO + " ";

         if (zones.features[i].properties.DIR != " "){
             zoneAddress += zones.features[i].properties.DIR + " ";
         }

         zoneAddress += zones.features[i].properties.STRNAME + " ";
         
         if(zones.features[i].properties.TYPE != " "){
             zoneAddress += zones.features[i].properties.TYPE;
         }
         
         zoneAddress += ", " + zones.features[i].properties.MUNI_NAME + ", KY " + zones.features[i].properties.ZIPCODE;

        zoneArray.push({
            "address": zoneAddress,
            "zone": zones.features[i].properties.ZONING_COD
        });
    }
    
}

function createHomesList(data){
    homes = data;
    var homeAddress;
    for (var i = 0; i < homes.length; i++) {
        homeAddress = homes[i].street_number + " ";
        
        if(homes[i].street_dir != "") {
            homeAddress += homes[i].street_dir + " ";
        }

        homeAddress += homes[i].street + " " + homes[i].street_suffix + ", " + homes[i].city + ", " + homes[i].state + " " + homes[i].zip;
        homeArray.push(homeAddress);
    }
}

function main(){
    for(var a = 0; a < homeArray.length; a++) {
        for(var z = 0; z < zoneArray.length; z++){
            console.log(homeArray[a].toLowerCase());
        }
    }
}
main();