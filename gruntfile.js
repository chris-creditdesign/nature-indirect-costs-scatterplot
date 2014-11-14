// Generated on 2014-11-07 using generator-polopoly-widget 0.0.0
module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		sass: {
		    build: {
		        files: {
		            'assets/css/index.css': 'assets/sass/index.scss'
		        }
		    }
		},

		jshint: {
			files: {
				src : 'assets/js/*.js'
			},
		},

		uglify: {
			build: {
				files: {
					'assets/js/index.min.js': ['assets/js/index.js']
				}
			}
		},

		concat: {
			buildIndex: {
				src: [	
						'assets/concat/polopoly-header.html',
						'assets/concat/style-open.txt',
						'assets/css/index.css',
						'assets/concat/style-close.txt',
						'assets/widget.html',
						'assets/concat/script-open.txt',
						'assets/js/pubsub.js',
						'assets/js/params.js',
						'assets/js/buttons.js',
						'assets/js/buildData.js',
						'assets/js/build_widget/buildWidget.js',
						'assets/js/build_widget/buildScales.js',
						'assets/js/build_widget/buildGraphic.js',
						'assets/js/build_widget/buildAxes.js',
						'assets/js/build_widget/buildBrush.js',
						'assets/js/build_widget/buildScatterPlot.js',
						'assets/js/build_widget/buildTooltip.js',
						'assets/js/build_widget/buildMiniMap.js',
						'assets/js/build_widget/buildKey.js',
						'assets/js/build_widget/buildCheckboxes.js',
						'assets/js/index.js',
						'assets/concat/script-close.txt',
						'assets/concat/polopoly-footer.html'
						],
				dest: 'build/index.html'
			},
			distIndex: {
				src: [	
						'assets/concat/style-open.txt',
						'assets/css/index.css',
						'assets/concat/style-close.txt',
						'assets/widget.html',
						'assets/concat/script-open.txt',
						'assets/js/pubsub.js',
						'assets/js/params.js',
						'assets/js/buttons.js',
						'assets/js/buildData.js',
						'assets/js/build_widget/buildWidget.js',
						'assets/js/build_widget/buildScales.js',
						'assets/js/build_widget/buildGraphic.js',
						'assets/js/build_widget/buildAxes.js',
						'assets/js/build_widget/buildBrush.js',
						'assets/js/build_widget/buildScatterPlot.js',
						'assets/js/build_widget/buildTooltip.js',
						'assets/js/build_widget/buildMiniMap.js',
						'assets/js/build_widget/buildKey.js',
						'assets/js/build_widget/buildCheckboxes.js',
						'assets/js/index.js',
						'assets/concat/script-close.txt',
						],
				dest: 'dist/index.html'
			}
		},

		browser_sync: {
			files: {
				src: [
					'build/index.html',
					]
			},
			options: {
				watchTask: true
			}
		},

		watch: {
		    css: {
		        files: ['assets/sass/**/*.scss'],
		        tasks: ['buildcss','concat']
		    },
			concat: {
				files: ['assets/*','assets/js/*.js','assets/js/build_widget/*.js'],
				tasks: ['jshint','concat']
			}
		}

    });

    grunt.registerTask('default', ['watch']);
    // use build css for the final dist css
    grunt.registerTask('buildcss',  ['sass']);

};