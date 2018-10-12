'use strict';
const path = require('path');

module.exports = appInfo => {

  exports.keys = appInfo.name + '#nuxt-egg';

  exports.core = 'nuxt-egg';

  exports.nuxt = {
    srcDir: path.join(appInfo.baseDir, './nuxt'),
    rootDir: path.join(appInfo.baseDir),
  };

  // allow website request throw up crsf check
  exports.security = {
    ignoreJson: true,
  };

  return exports;
};
