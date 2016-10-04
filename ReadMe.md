# zoningFinder

Creating a simple application to compare the addresses from one data source to another. The goal is to find properties with the proper zoning code (for instance "R2"). The app will take a list of addresses in a given area that are currently for sale and compare to a comprehensive list of all houses in that area and their zoning codes. If an address is matched it then checks which zoning code is given to that address and if it is the desired zoning the address will be displayed on the screen.

Although this info could be searched manually, I currently have over 200 listings to search and will be running similar searches in the future. Hopefully this will prove to be a major time savings.

## List of Houses for Sale
CSV obtained from lou.flexmls.com realtor website. I use an excel macro to remove the many unwanted fields other than the MLS ID# and the address information. Then I take the remaining data and convert it to JSON using a site such as http://www.csvjson.com/csv2json and save the file locally with the app.

## Zoning Code Data
This data is obtained from the LOJIC Opend Data Portal maintained by the city.
I specifically use the Jefferson County KY Address Points Dataset found at http://louisville.lojic.opendata.arcgis.com/datasets/638546493a6f41c098c060eedda851af_0.

An API is provided to access this data. The size of the data (166+ MB of JSON data) has been difficult to load in regular applications such as VS Code, Notepad++ etc as they state the file is too large. You can filter the data being queried on the website and then copy the link to the filtered JSON data for testing as I have. A link to the full set of JSON data is provided below.

http://louisville.lojic.opendata.arcgis.com/datasets/638546493a6f41c098c060eedda851af_0.geojson
