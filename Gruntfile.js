module.exports = function(grunt){
	grunt.initConfig({
		watch: {
			js: {
				files: ['src/*.js'],
				tasks: 'uglify',
			}
		},
		uglify: {
			options: {
			},  
			js: {
				files: {
					"./build/geocodeAnyone.min.js":"./src/geocodeAnyone.js"
				}
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['uglify']);
};

