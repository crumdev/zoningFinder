
/*
 * Global Variables
 */
var homes;
var zones;

/*
 *
 * Main function to execute the app and call all other functions.
 * 
 */

function main() {
    getHomes();
    console.log(homes[0].state);
}


function getZones() {
    var xhr_zones = new XMLHttpRequest();
    xhr_zones.onreadystatechange = function () {
        if(xhr_zones.readyState === 4) {
            if (xhr_zones.status === 200){
                console.log("success");
                var data = JSON.parse(xhr_zones.responseText);
                zones = data;
            } else {
                alert(xhr_zones.response);
            }
        }
    };
    xhr_zones.open('GET', 'data/zoning_data.json');
    xhr_zones.send();
}

function getHomes () {
    var xhr_homes = new XMLHttpRequest();
    xhr_homes.onreadystatechange = function () {
        if(xhr_homes.readyState === 4) {
            if(xhr_homes.status === 200) {
                var data = JSON.parse(xhr_homes.responseText);
                homes = data;
            } else {
                alert(xhr_homes.response);
            }
        }
    };
    xhr_homes.open('GET', 'data/homes.json');
    xhr_homes.send();
}

main();