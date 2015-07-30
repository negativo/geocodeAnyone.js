#Geocode ... ? ... Anyone? geocodeAnyone!

##WHAT?

A deadly simple JavaScript library to deal with the geocode API.


##Requisites

	typeof google.maps.Geocoder != "undefined"


##HOW

Include the google code 
	<script src="http://maps.google.com/maps/api/js?sensor=true"></script>

Get the geolocation data using an input string:

	geocodeAnyone.getAddressFromAddress("your address string",callback);

Or ask to the client to enable the geolocation API:

	geocodeAnyone.askAddress(callback);



##SHUT UP! GIVE ME A COMPLETE EXAMPLE


	<script src="http://maps.google.com/maps/api/js?sensor=true"></script>
		<script src="../build/geocodeAnyone.min.js"></script>
		<script>

		function askAddress(){
			var result = document.querySelector(".address"),address;
				result.innerHTML = 'searching ... ';


			geocodeAnyone.askAddress(function(fullAddress){
				address = JSON.stringify(fullAddress, null,"\t");

				result.innerHTML = address;
				console.log(fullAddress);
			});

		}

		function askAddressFromAddress(address){
		
			var result = document.querySelector(".position"),address;
			
			result.innerHTML = 'searching ... ';
			geocodeAnyone.getAddressFromAddress(address,function(position){
			
				address = JSON.stringify(position, null,"\t");
				result.innerHTML = address;
				console.log(position);
			});
		
		}
		
	</script>