;(function (document,window,navigator){
	var promise = {
	    isDone: false,
	    doneHandler: null,
	    done: function(f) {
	        if (this.isDone) {
	            f();
	        } else {
	            this.doneHandler = f;
	        }
	    },
	    callDone: function(address) {
	        if (this.doneHandler != null) {
	            this.doneHandler(address);
	        } else {
	            this.isDone = true;
	        }
	    }
	};
	
	var geocodeAnyone = {
		init:function(){
			if(typeof google.maps.Geocoder !== 'undefined'){
				this.geocoder = new google.maps.Geocoder() ;
				this.fullAddress = '';
				return this.geocoder;
			}else{
				return 'google.maps.Geocoder is not defined';
			}
		},
		getFullAddress:function(){

			return geocodeAnyone.fullAddress;
		
		},
		askAddress:function(callback){
		
			geocodeAnyone.geocoder = geocodeAnyone.geocoder || geocodeAnyone.init();
			if(callback!=null){
				promise.done(function(address){
					callback(address);
				});
			}
			
			return navigator.geolocation.getCurrentPosition(geocodeAnyone.askAddressSuccess, function(){ return false; });
		
		},
		
		askAddressSuccess:function(position){
		
			var lat = (position.coords!=null)?position.coords.latitude:position.G;
		 	var lng = (position.coords!=null)?position.coords.longitude:position.K;
		  	geocodeAnyone.fullAddress = geocodeAnyone.getAddressFromLatLng(lat, lng);
		  	return geocodeAnyone.fullAddress;
		  	
		},
		getAddressFromAddress:function(address,callback){
			if(callback!=null){
				promise.done(function(result){
					callback(result);
				});
			}
			geocodeAnyone.geocoder = geocodeAnyone.geocoder || geocodeAnyone.init();
			geocodeAnyone.geocoder.geocode( { 'address': address}, function(results, status) {
			    if (status == google.maps.GeocoderStatus.OK) {
		    		geocodeAnyone.askAddressSuccess(results[0].geometry.location);
		    		
		    		return {fullAddress:geocodeAnyone.fullAddress};
		    	} else {
		       		return 'Geocode was not successful for the following reason: ' + status;
		    	}
		  	});
		},
		getAddressFromLatLng:function(lat, lng){
			var fullAddressArray = [],
				components,
				latlng = new google.maps.LatLng(lat,lng),
				current,
				fullAddress;

			geocodeAnyone.geocoder.geocode({'latLng': latlng}, function(results, status) {
		    if (status == google.maps.GeocoderStatus.OK) {
		      if (results[1]) {
		      	components = results[0].address_components;
		        for (var i=0; i<components.length; i++) {
		        	current =  components[i];
		        	fullAddressArray.push({name:current.long_name,type:current.types[0]});
		        	
		        }
		      	fullAddressArray.push({name:lat,type:'lat'});
		      	fullAddressArray.push({name:lng,type:'lng'});
		      	fullAddress = fullAddressArray.reduce(function(obj,k){
		      		obj[k.type] = k.name;
		      		return obj;
		      	});
		      	fullAddress[fullAddress.type] = fullAddress.name;
		      	delete fullAddress['name'];
		      	delete fullAddress['type'];
		      	geocodeAnyone.fullAddress  = fullAddress;
		      	promise.callDone(fullAddress);
		      	return fullAddress;
		      
		      } else {
		      
		        return "No results found";
		      
		      }
		    
		    } else {
		    
		      return "Geocoder failed due to: " + status;
		    
		    }

		  });

		},
		destroy: function(){
		
			window['geocodeAnyone'].geocoder = null;
			window['geocodeAnyone'].fullAddress = null;
		
		}
	};

	window['geocodeAnyone'] = geocodeAnyone;
	
})(document,window,navigator);

