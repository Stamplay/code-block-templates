const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}

module.exports = function templatesFn(grunt) {
  grunt.registerTask('templates', () => {
    const templates = [];

    fs.readdirSync('templates/').filter((file) => {
      return file.indexOf('.yaml') >= 0;
    }).map((tmpl) => {
      const template = grunt.file.readYAML(path.join('templates/', tmpl));
      template.id = generateId();
      templates.push(template);
    });

    templates.sort((t1, t2) => {
      const order = t1.order - t2.order;
      return order;
    });

    grunt.file.write(path.join('release', 'templates.json'), JSON.stringify(templates, null, 2));
  });
};
