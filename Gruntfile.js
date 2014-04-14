module.exports = function (grunt) {
    grunt.initConfig({

      // Metadata.
      pkg: grunt.file.readJSON('package.json'),

        // our Grunt task settings
        // connect: {
        //   test: {
        //     port: 8000
        //   }
        // },
        jasmine : {
          src : 'lib/**/*.js',
          options : {
              specs : 'spec/**/*.js',
              // template: require('grunt-template-jasmine-requirejs'),
              // templateOptions: {
              //     requireConfig: {
              //         baseUrl: ''
              //     }
              // }
          }
        },
        watch: {
            js: {
                files: [
                    'src/**/*.js',
                    'spec/**/*.js'
                ],
                tasks: ['jasmine']
            }
        }
    });
     // Unit Testing Task
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-connect');
    // grunt.registerTask('test', ['connect', 'jasmine']);
};
