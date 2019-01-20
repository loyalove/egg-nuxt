'use strict';
const path = require('path');

module.exports = appInfo => {

  const config = {}

  config.keys = appInfo.name + '#egg-nuxt';

  config.core = 'egg-nuxt';

  config.nuxt = {
    srcDir: path.join(appInfo.baseDir, './nuxt'),
    rootDir: path.join(appInfo.baseDir),
  };

  // allow website request throw up crsf check
  config.security = {
    ignoreJson: true,
  };

  return config;
};
