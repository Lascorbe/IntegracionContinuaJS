"use strict";

module.exports = function(grunt){

	var SRC_DIR = 'src/',
		SCRIPTS_DIR = SRC_DIR + 'lib/',
		ALL_STYLES = SRC_DIR + 'css/**/*.css',
		TESTS_DIR = SRC_DIR + 'test/',
		UNIT_TESTS = TESTS_DIR + 'unit/**/*.js',
		BDD_TESTS = TESTS_DIR + 'bdd/*.js';

	grunt.initConfig({
		csslint:{
			all:{
				files:{
					src: [ALL_STYLES]
				}
			}
		},
		jshint:{
			options:{
				//neutral environment
				browser: false,
				node: false,
				jquery: false,
				strict: true,
				globalstrict: true,
				bitwise: true,
				camelcase: true,
				curly: false,
				eqeqeq: true,
				forin: true,
				latedef: true,
				newcap: true,
				noarg: true,
				nonew: true,
				undef: true,
				unused: true,
				white: false,
				trailing: true,
				maxparams: 3,
				maxstatements: 10,
				maxdepth: 2,
				maxcomplexity: 5
			},
			core:{
				options:{
					globals:{
						module: true,
						setTimeout: true, // TODO: fixme!
						localStorage: true // TODO: fixme!
					}
				},
				files:{
					src: [SCRIPTS_DIR + 'core/**/*.js']
				}
			},
			jquery:{
				options:{
					browser: true,
					jquery: true,
					globals:{
						module: true,
						require: true,
						console: true
					}
				},
				files:{
					src: [SCRIPTS_DIR + 'zepto_jquery/**/*.js']
				}
			},
			knockout:{
				options:{
					browser: true,
					globals:{
						module: true,
						require: true,
						console: true
					}
				},
				files:{
					src: [SCRIPTS_DIR + 'knockout/**/*.js']
				}
			},
			gruntfile:{
				options:{
					node: true,
					maxstatements: false // a saber
				},
				files:{
					src: ['Gruntfile.js']
				}
			},
			unit:{
				options:{
					node: true,
					expr: true,
					latedef: false,
					globals:{
						describe: true,
						beforeEach: true,
						afterEach: true,
						xdescribe: true,
						context: true,
						it: true,
						xit: true
					}
				},
				files:{
					src: [UNIT_TESTS]
				}
			},
			bdd:{
				options:{
					browser: true,
					jquery: true,
					expr: true,
					maxparams: 5, // TODO: fixme!
					maxdepth: 3, // TODO: fixme!
					maxstatements: 20, // TODO: fixme!
					globals:{
						describe: true,
						beforeEach: true,
						afterEach: true,
						xdescribe: true,
						context: true,
						it: true,
						xit: true,
						chai: true,
						bdd: true,
						console: true
					}
				},
				files:{
					src: [BDD_TESTS]
				}
			},
			watch:{
				gruntfile:{
					files:['Gruntfile.js'],
					tasks:['jshint:gruntfile']
				},
				bdd:{
					files:[BDD_TESTS],
					tasks:['jshint:bdd']
				},
				unit:{
					files:[UNIT_TESTS],
					tasks:['jshint:unit']
				},
				core:{
					files:[SCRIPTS_DIR + 'core/**/*.js'],
					tasks:['jshint:core']
				},
				jquery:{
					files:[SCRIPTS_DIR + 'zepto_jquery/**/*.js'],
					tasks:['jshint:jquery']
				},
				knockout:{
					files:[SCRIPTS_DIR + 'knockout/**/*.js'],
					tasks:['jshint:knockout']
				},
				styles:{
					files:[ALL_STYLES],
					tasks:['csslint']
				}
			}
			/*all:{
				files:{
					src: [SCRIPTS_DIR + '***.js', 'Gruntfile.js']
				}
			}*/
		}
	});

	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',[
		'csslint',
		'jshint'
	]);
};



/*
concat:{
			options:{

			},
			foo:{
				options:{

				},
				files:{
					//src: ['src/*.js', 'src/*.json'],
					//dest:
					//"dist/todo-a.js": ['src/a/*.js', 'src/a/*.json'],
					//"dist/todo-b.js": ['src/b/*.js', 'src/b/*.json'],
					{
						dest: "dist/todo-a.js",
						src: ['a/*.js', 'a/*.json'],
						filter: function(filepath){
							return true;
						},
						expand: true,
						flatten: true,
						rename: function(destPath, srcPath){
							return newPath;
						},
						ext: ".js",
						cwd: "src/"
					},
					{
						dest: "dist/todo-b.js",
						src: ['src/b/*.js', 'src/b/*.json']
					}
				}
			},
			bar:{

			}
		},
		minimification:{

		}
*/