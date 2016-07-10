module.exports = function(grunt) {

  grunt.registerTask('hello',helloWorld);

  function helloWorld () {
    console.log('hi');
  }

	grunt.loadNpmTasks('grunt-contrib-watch');
};