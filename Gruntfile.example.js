module.exports = function(grunt){
	grunt.initConfig({
		less: {
	         dev: {
	             options: {
	                 paths: ["/srv/www/nodeapp/public/css/"]
	             },
	             files: {"public/css/main.css": "/srv/www/nodeapp/public/css/main.less"}
	         }
	     },
	  concat: {
	  	mainjs:{
	  		src:[],
	  		dest:""
	  	},

	  	maincss:{
	  		dest:'',
	  		src:[''],
	  	}
	  },
	   	cssmin: {
		  options: {
		    shorthandCompacting: false,
		    roundingPrecision: -1
		  },
		  target: {
		    files: {
		      '/srv/www/nodeapp/public/css/main.min.css': ['/srv/www/nodeapp/public/css/main.css'],
		    }
		    
		  }
		},
	  watch: {

	    styles: {
	        files: ['/srv/www/nodeapp/public/css/**/*.less'], 
	        tasks: ['less','concat:maincss','cssmin'],
	        options: {
	          nospawn: true
	        }
	      },
	    js: {
	      files: ['/srv/www/nodeapp/public/js/**/*.js'],
	      tasks: 'concat:mainjs,uglify',
	    },
	    css: {
	      files: ['/srv/www/nodeapp/public/css/**/*.css'],
	      tasks:['concat:maincss','cssmin']
	    },
	    ugli: {
	      files: ['/srv/www/nodeapp/public/js/main.js'],
	      tasks: 'uglify',
	    },
	  },
	  uglify: {
	  	options: {
	      mangle: {
	        except: ['jQuery']
	      }
	    },  
	    js: {
	      files: {
	        "/srv/www/nodeapp/public/js/main.min.js":["/srv/www/nodeapp/public/js/vendor.min.js","/srv/www/nodeapp/public/js/main.js"],
	        "/srv/www/nodeapp/public/js/vendor/headPlugins.min.js":["/srv/www/nodeapp/public/js/vendor/headPlugins.min.js"],
	        "/srv/www/nodeapp/public/js/studioProfile.min.js":["/srv/www/nodeapp/public/js/studioProfile.js"],
	        "/srv/www/nodeapp/public/js/profile.min.js":["/srv/www/nodeapp/public/js/profile.js"],
	        "/srv/www/nodeapp/public/js/userProfile.min.js":["/srv/www/nodeapp/public/js/userProfile.js"],
	        "/srv/www/nodeapp/public/js/welcome.min.js":["/srv/www/nodeapp/public/js/welcome.js"],
	        "/srv/www/nodeapp/public/js/page-tattoo.min.js":["/srv/www/nodeapp/public/js/page-tattoo.js"],
	        "/srv/www/nodeapp/public/js/createTattoo.min.js":["/srv/www/nodeapp/public/js/createTattoo.js"],
	        "/srv/www/nodeapp/public/js/editTattoo.min.js":["/srv/www/nodeapp/public/js/editTattoo.js"],
	        "/srv/www/nodeapp/public/js/createGuestEvent.min.js":["/srv/www/nodeapp/public/js/createGuestEvent.js"],
	        "/srv/www/nodeapp/public/js/searchResult.min.js":["/srv/www/nodeapp/public/js/searchResult.js"],
	        "/srv/www/nodeapp/public/js/admin.min.js":["/srv/www/nodeapp/public/js/admin.js"]
	      }
	    }
	  },
	});
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default',['less','concat','cssmin','uglify']);

};

