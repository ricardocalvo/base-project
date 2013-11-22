module.exports = function(grunt) {
    // Load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // contrib-connect
        // connect: {
        //     server: {
        //         options: {
        //             keepalive: true,
        //             debug:  true,
        //             port:   8000,
        //             open:   'index.html',
        //             base:   './app/'
        //         }
        //     }
        // }
    });
    
    // grunt.registerTask('default', ['connect']);
};