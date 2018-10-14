'use strict';

const {
  Builder
} = require('nuxt')

module.exports = app => {
  app.config.coreMiddleware.unshift('nuxtRender');

  app.beforeStart(async () => {
    try {
      await new Builder(app.nuxt).build();
      if (!app.config.nuxt.dev) {
        console.log('[nuxt] Building done'); // eslint-disable-line no-console
      }
    } catch (error) {
      console.log('[nuxt] Building error', error); // eslint-disable-line no-console
      process.exit(1);
    }
  });
};