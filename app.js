'use strict';

const {
  Builder
} = require('nuxt')

module.exports = app => {
  app.config.coreMiddleware.unshift('nuxtRender');

  app.beforeStart(async () => {
    try {
      if (app.config.nuxt.dev) {
        await new Builder(app.nuxt).build();
        console.log('[nuxt] Building done'); // eslint-disable-line no-console
      }
    } catch (error) {
      console.log('[nuxt] Building error', error); // eslint-disable-line no-console
      process.exit(1);
    }
  });
};