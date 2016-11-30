module.exports = function cdn(grunt) {
  grunt.registerTask('cdn', [
    'templates',
    'aws_s3:publish',
  ]);
};
