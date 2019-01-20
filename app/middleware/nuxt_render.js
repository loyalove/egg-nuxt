'use strict';

const nuxtPaths = ['/_nuxt', '/__webpack_hmr']

function isNuxt(path) {
  return nuxtPaths.some(val => {
    return path.match(val)
  })
}

module.exports = (options, app) => {

  return async (ctx, next) => {

    // webpack hot reload
    if (!isNuxt(ctx.path)) {

      await next()

      // ignore status if not 404
      if (ctx.status !== 404 || ctx.method !== 'GET') {
        return;
      }
    }

    ctx.status = 200

    await new Promise(resolve => {
      app.nuxt.render(ctx.req, ctx.res, resolve);
    });

    next();

  };
};