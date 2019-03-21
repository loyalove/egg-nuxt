'use strict';

module.exports = (options, app) => {

  return async (ctx, next) => {

    // 先执行其他的请求处理
    await next()

    // 处理结果不为404, 或者请求方式不为GET, 则说明该请求为服务器处理请求, nuxt不作处理
    if (ctx.status !== 404 || ctx.method !== 'GET') {
      return;
    }

    const path = ctx.path;

    if (/\.js$/.test(path)) {
      ctx.set('Content-Type', 'application/javascript');
    }

    if (/\.css/.test(path)) {
      ctx.set('Content-Type', 'text/css');
    }

    // webpack hot reload
    if (path.match('/__webpack_hmr/client')) {
      ctx.response.remove('Content-Length')
    }

    ctx.status = 200;
    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash

    // 执行nuxt渲染方法
    let nuxt = app.nuxt;
    nuxt.render(ctx.req, ctx.res)
  };
};