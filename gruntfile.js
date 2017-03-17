module.exports = function configureGrunt(gruntConfig) {

  gruntConfig.initConfig({ //config of tasks
    clean: ['build/'], //shortcut to clean the build directory before making it again

    copy: { //grunt task name
      copyHTML: { //target name I created
        files: [
          {
            cwd: 'src', //current working directory
            src: [ '*.html' ],
            dest: 'build/',
            expand: true
          }
        ]
      },

      copyJquery: { //target name I created
        files: [
          {
            cwd: 'src/js', //current working directory
            src: [ 'jquery.js' ],
            dest: 'build/js/vendor/',
            expand: true
          }
        ]
      }


    },

    sass: { //grunt task name

      all: { //target name I created for all SASS files
        files: { //I want to produce STYLE.CSS in my build from X destination
          'build/style.css' : 'src/sass/main.scss'
        }
      }
    },

    jshint: { //one target for src files
      thoughterappjs: { //target name I made up
        options: {
          jshintrc: '.jshintrc'
        },
        files: {
          src: [ 'src/**/js' ] //Specifying jshint to run on SRC directory
        }
      }
    },

    karma: { //grunt task name
      all: {//target name, but if you wanted to seperate out seperate tests, then we would do that here
        //would I need to make seperate sections to test recent thoughts and then new thoughts?
        options: {
          frameworks: ['chai', 'mocha'],
          browsers: [ 'Chrome' ],
          singleRun: true, //this launches Chrome
          files: [
            'src/**/*.js',
            'node_modules/fetch-mock/es5/client-browserified.js',
            'tests/specs/**/*.js'
          ]
        }
      }
    }



  });
  require('load-grunt-tasks')(gruntConfig);

  gruntConfig.registerTask( 'build', ['jshint', 'karma', 'clean', 'copy', 'sass'] );
  //this creates an alias in order to run multiple tasks

};
