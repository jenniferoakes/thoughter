# Thoughter

This repo is also designed to get practice for setting up process automation using Grunt. This assignment will help with understanding how to add tasks to Grunt and what basic configuration setups might be useful for future projects.

## Git Command Review:
```sh
  git checkout phase-two

  git merge master

  esc

  :wq
```

## Terminal Commands:
```sh
  npm install --save-dev fetch-mock

  npm install --save-dev grunt

  npm install grunt-contrib-copy --save-dev

  npm install --save-dev load-grunt-tasks

  npm install -g grunt-cli

  npm install --save-dev grunt-contrib-clean

    grunt

    grunt copy

    grunt build

  npm install --save-dev grunt-contrib-sass

  npm install --save-dev grunt-contrib-jshint

  npm install --save-dev grunt-karma
```

## What We Are Doing:
- [x] Added fetch-mock (**node_modules/fetch-mock/es5/client-browserified.js**) to our conf.js file and deleted sinon because and XHR does not work with a fetch call
- [ ] Create a build directory in the project root, and make sure all of the application code will be in there once the Grunt tasks are complete
- [x] Use plugins on Grunt website to find the right tasks for project
- [ ] There should be nothing else in the build directory
- [ ] The build directory should be *cleaned* before any full build
- [ ] All JS code must be linted (using jshint) **before** being concatenated
- [ ] All JS code must be tested **before** being concatenated
- [ ] Create an application code that includes index.html, styles in a single style.css file (including a map file), and a jQuery file
- [ ] JQuery needs to be a dependency. Install this and track the dependency in pacakage.json. Then copy the jQuery.js file to the build/js/vendor/directory where Grunt runs

- [ ] Use initConfig function for Grunt
- [ ] Tell Grunt how to run tasks
- [ ] Create an alias using **gruntConfig.registerTask(  );** in order to run multiple other tasks with one terminal command
- [ ] Add jshintrc and specify what files to use jshintrc on
- [ ] Make use of globbing patterns to specify paths
- [ ] Making sure grunt can run karma, and add it to our alias
- [ ] Challenge/Research: Attempt to concatenate all JS files into a single app.js file, and in a js directory.

By: [Jennifer Oakes](https://www.linkedin.com/in/jennifernicoleoakes/)

March 2017
