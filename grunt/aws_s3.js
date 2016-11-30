const pkgJson = require('../package.json');

const version = pkgJson.version;
const BASE_PATH = 'codetemplates';
const TMPL_PATH = `${BASE_PATH}/${version}`;

module.exports = {
  options: {
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET,
    bucket: process.env.S3_BUCKET,
    region: process.env.S3_REGION,
    uploadConcurrency: 5,
    params: {
      CacheControl: 'public, max-age=300',
    },
  },
  publish: {
    files: [
      {
        action: 'upload',
        expand: true,
        cwd: 'release/',
        src: ['templates.json'],
        dest: `${TMPL_PATH}`,
      },
      {
        action: 'copy',
        src: `${TMPL_PATH}/templates.json`,
        dest: `${BASE_PATH}/latest/`,
      },
    ],
  },
};
