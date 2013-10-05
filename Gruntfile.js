module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


       watch: {
            css: {
                files: ['public/assets/less/**/*.less'],
                tasks: ['less']
            }
        },

        concat: {},

        uglify: {},

        less: {
            admin: {
                files: { 'public/assets/css/public.css': 'public/assets/less/public.less' }
            },
            error: {
                files: { 'public/assets/css/error.css': 'public/assets/less/error.less' }
            },
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'watch']);

};
