const templatesTask = require('./grunt-task/templates');
const cdnTask = require('./grunt-task/cdn');
const dev = require('./grunt-task/dev');

const loadGruntConfig = require('load-grunt-config');

module.exports = function GruntTasks(grunt) {
  templatesTask(grunt);
  cdnTask(grunt);
  dev(grunt);

  loadGruntConfig(grunt, {
    init: true,
    config: {
      pkg: grunt.file.readJSON('package.json'),
    },
  });
};
