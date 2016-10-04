
/*
 * Global Variables
 */
var homes;
var zones;

var xhr_zones = new XMLHttpRequest();
xhr_zones.onreadystatechange = function () {
    if(xhr_zones.readyState === 4) {
        if (xhr_zones.status === 200){
            console.log("01 - Ajax request for zoning_data.json");
            var data = JSON.parse(xhr_zones.responseText);
            zones = data;
            console.log("Zipcode pulled from first record: " + zones.features[0].properties.ZIPCODE);
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
            console.log("02 - Ajax request for homes.json");
            var data = JSON.parse(xhr_homes.responseText);
            homes = data;
            console.log("Zipcode pulled from first record: " + homes[0].zip);
        } else {
            alert(xhr_homes.response);
        }
    }
};
xhr_homes.open('GET', 'data/homes.json');
xhr_homes.send();

console.log("03 - Attempt to log zoning data outside of Ajax");
//console.log("Zipcode pulled from first record: " + zones.features[0].properties.ZIPCODE);

console.log("04 - Attempt to log homes data outside of Ajax");
console.log("Zipcode pulled from first record: " + homes[0].county);