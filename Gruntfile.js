module.exports = function (grunt) {
    grunt.initConfig({

      // Metadata.
      pkg: grunt.file.readJSON('package.json'),

      jasmine : {
        src : 'src/**/*.js',
        options : {
            specs : 'spec/**/*.js'
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

};
