'use strict';

module.exports = (options, app) => {

  return async function (ctx, next) {

    // webpack hot reload
    if (ctx.path === '/__webpack_hmr') {
      return new Promise(executor => {
        app.nuxt.render(ctx.req, ctx.res, executor)
      })
    }

    await next()

    // ignore status if not 404
    if (ctx.status !== 404 || ctx.method !== 'GET') {
      return;
    }

    return new Promise(executor => {
      app.nuxt.render(ctx.req, ctx.res, executor)
    })
    
  };
};