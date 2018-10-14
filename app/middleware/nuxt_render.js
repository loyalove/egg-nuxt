'use strict';

const nuxtPaths = ['/_nuxt', '/__webpack_hmr']

function isNuxt(path) {
  return nuxtPaths.some(val => {
    return path.match(val)
  })
}

module.exports = (options, app) => {

  return async function (ctx, next) {

    // webpack hot reload
    if (isNuxt(ctx.path)) {
      return new Promise(executor => {
        app.nuxt.render(ctx.req, ctx.res, executor)
      })
    }

    await next()

    // ignore status if not 404
    if (ctx.status !== 404 || ctx.method !== 'GET') {
      return;
    }

    ctx.status = 200
    ctx.respond = false
    return new Promise(executor => {
      app.nuxt.render(ctx.req, ctx.res, executor)
    })

  };
};