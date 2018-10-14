'use strict';

module.exports = (options, app) => {

  return async function (ctx, next) {

    // webpack hot reload
    if (ctx.path === '/__webpack_hmr') {
      return new Promise((resolve, reject) => {
        ctx.res.on('close', resolve)
        ctx.res.on('finish', resolve)
        ctx.app.nuxt.render(ctx.req, ctx.res, promise => {
          promise.then(resolve).catch(reject)
        })
      })
    }

    await next()

  };
};