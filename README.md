# Thoughter

This repo is also designed to get practice for setting up process automation using Grunt. This assignment will help with understanding how to add tasks to Grunt and what basic configuration build setups might be useful for future projects.

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

    grunt build

  npm install --save-dev grunt-contrib-sass

  npm install --save-dev grunt-contrib-jshint

  npm install --save-dev grunt-karma

  npm install jquery

  npm install --save jquery
```

## Tasks:
- [x] Add fetch-mock (**node_modules/fetch-mock/es5/client-browserified.js**) to  conf.js file and delete sinon because and XHR does not work with a fetch call
- [X] Create a build directory in the project root, and make sure all of the application code will be in there once the Grunt tasks are complete
- [x] Use plugins on Grunt website to find the right tasks for project
- [X] Use initConfig function for Grunt
- [X] Create an alias using **gruntConfig.registerTask(  );** in order to run multiple other tasks with one terminal command
- [X] Add jshintrc and specify what files to use jshintrc
- [X] The build directory should be *cleaned* before any full build
- [X] Make use of globbing patterns to specify paths
- [X] Make sure grunt can run karma, and add it alias
- [X] There should be nothing else in the build directory
- [X] Create an application code that includes index.html, styles in a single style.css file (including a map file), and a jQuery file
- [X] JQuery needs to be a dependency. Install this and track the dependency in pacakage.json
- [X] Copy the jQuery.js file to the build/js/vendor/directory where Grunt runs
- [ ] All JS code must be linted (using jshint) **before** being concatenated
- [ ] All JS code must be tested **before** being concatenated

- [ ] Research: Attempt to concatenate all JS files into a single app.js file, and in a js directory.
- [ ] Make sure things are good by running 'http-server build/'. Make sure all CSS and JS files load and check the "Network" tag in the developer console of Chrome to confirm.
- [ ] Set up watch plugin with Grunt. Make sure it only watches SASS files.
- [ ] Write tests for the new-thought.js file. Make a **new** spec file.
- [ ] Add code coverage with Karma. See how much of the source code my tests are running and edit to increase percentage.

## How To Create a New Build:
1. Run **npm install --save-dev grunt** in your terminal.
2. Create **gruntfile.js** in root directory.
3. Install Grunt plugins to use in gruntfile.
4. Install appropriate devDependencies and dependencies for project. 
5. Use initConfig function in Grunt file, and create aliases to run multiple tasks with one terminal command.

By: [Jennifer Oakes](https://www.linkedin.com/in/jennifernicoleoakes/)

March 2017
