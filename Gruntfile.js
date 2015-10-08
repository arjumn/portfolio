module.exports = function(grunt) {
  grunt.initConfig({

    pkg : grunt.file.readJSON('package.json'),
    sass : {
      dist: {
        files: {
          'css/main.css' : 'css/scss/main.scss'
        }
      }
    },

    includes: {
      files: {
        src: [
          'src/*.html'
        ],
        dest: 'dist/',
        flatten: true,
        cwd: '.'
      }
    },

    watch: {
      css : {
        files : '**/*.scss',
        tasks : ['sass']
      },
      docs: {
        files: 'src/docs/**/*',
        tasks: ['includes']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-includes');
  grunt.registerTask('build', ['sass', 'includes']);
  grunt.registerTask('default', 'Default build and watch task.', function() {
    grunt.task.run(['build', 'watch']);
  });
}
