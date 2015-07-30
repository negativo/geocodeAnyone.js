#Geocode ... ? ... Anyone? geocodeAnyone!

##WHAT?

A deadly simple JavaScript library to deal with the geocode API.


##Indispensable

	typeof google.maps.Geocoder != "undefined"


##HOW

Include the google code 
	http://maps.google.com/maps/api/js?sensor=true

Get the geolocation data using an input string:

	geocodeAnyone.getAddressFromAddress("your address string",callback);

Or ask to the client to enable the geolocation API:

	geocodeAnyone.askAddress(callback);


##EXAMPLE RESULTS

Results for Input

	Miami Beach


	{
		"route": "Highway A1A",
		"neighborhood": "South Beach",
		"locality": "Miami Beach",
		"administrative_area_level_2": "Miami-Dade County",
		"administrative_area_level_1": "Florida",
		"country": "United States",
		"postal_code": "33139",
		"postal_code_suffix": "3112",
		"lat": 25.790654,
		"lng": -80.1300455,
		"street_number": "1619-1649"
	}

##SHUT UP! GIVE ME A COMPLETE EXAMPLE

Open examples/index.html or  [Look at this demo](http://davideberardi.com/geocodeAnyone/examples/)