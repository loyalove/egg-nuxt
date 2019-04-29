'use strict';

const {Nuxt, Builder} = require('nuxt');

module.exports = app => {
  app.config.coreMiddleware.unshift('nuxtRender');

  app.beforeStart(async () => {
    try {
      if (app.config.nuxt.dev) {
        await app.nuxtBuilder.build();
        app.logger.info('[nuxt] nuxt building done'); // eslint-disable-line no-console
      }

      app.nuxt
      app.logger.info(`[nuxt] nuxt version ${Nuxt.version}`);
    } catch (error) {
      app.logger.error('[nuxt] nuxt building error', error); // eslint-disable-line no-console
      process.exit(1);
    }
  });

};