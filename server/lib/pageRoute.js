

const router = require('koa-router')();
const views = require('koa-views');
const path = require('path');

let scriptString = ''

const pages = [
  {
    name: 'app',
    title: 'demo'
  }
]

pages.map( item => {
  router.get(`/${item.name}`, function(ctx, next){
    ctx.state = {
      title: item.name,
      scriptStr: wrapScriptImports(item.name),
    }
    return ctx.render('./index.hbs')
  })
})

const wrapScriptImports = function (name) {
  const buildScript = function (src) {
    return `<script src="${src}"></script>`;
  };

  return `${buildScript('/vendor.dll.js')}${buildScript(`${name}.bundle.js`)}`
  // if (isDev) {
  //   data.scripts = `${buildScript('/vendor.dll.js')}
  //        ${buildScript(`${name}.bundle.js`)}`;
  // } else {
  //   data.scripts = `${buildScript(mapping[`${staticResourceContext}manifest.js`])}
  //       ${buildScript(mapping[`${staticResourceContext}vendor.js`])}
  //       ${buildScript(mapping[`${staticResourceContext}${data.name}.js`])}`;
  // }
};


function pageRoute(app) {
  app.use(views(path.join(__dirname, '/../views'), {
    map: { hbs: 'handlebars' }
  }))

  router.get('/', function (ctx, next) {
    ctx.state = { title: '22222', author: 'queckezz' }

    return ctx.render('./index.hbs')
  });


  app.use(router.routes())
    .use(router.allowedMethods())
}

module.exports = pageRoute
