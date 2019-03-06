
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/js/script.js',
            },
            css: {
                src: ['css/1.css', 'css/2.css'],
                dest: 'build/css/styles.css',
            },
        },        
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat:js'],
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat:css'],
            },
        },
        browserSync: {
            bsFiles: {
                src : [
                    'build/css/**.css',
                    'build/js/**.js',
                    './*.html'
                ]
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync', 'concat', 'watch']);

}