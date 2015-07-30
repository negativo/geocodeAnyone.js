#Geocode ... ? ... Anyone? geocodeAnyone!

##what?

A deadly simple JavaScript library to deal with the geocode API.


##Requisites

	google.maps.Geocoder() 


##how

Get the geolocation data using an input string:

	geocodeAnyone.getAddressFromAddress("your address string",callback);

Or ask to the client to enable the geolocation API:

	geocodeAnyone.askAddress(callback);