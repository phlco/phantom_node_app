module.exports = function (grunt) {
    grunt.initConfig({

      // Metadata.
      pkg: grunt.file.readJSON('package.json'),

      // JavaScript testing. Run with `grunt jasmine`
      jasmine : {
        src : 'src/**/*.js',
        options : {
            specs : 'spec/**/*.js'
        }
      },

      // Guard equivalent. Run with `grunt watch`
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
    grunt.registerTask('default', ['jasmine']);

};
