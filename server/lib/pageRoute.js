
import Router  from 'koa-router'
import views  from 'koa-views'
import path  from 'path'

import {pagesRoute} from '../../config';
const router = new Router()

function addRoute(){
  pagesRoute.map( item => {
    const name = item.name;
    router.get(`/${name}`, function(ctx, next){
      ctx.state = {
        title: name,
        scriptStr: wrapScriptImports(name),
      }
      return ctx.render('./index.hbs')
    })
  })
}

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

  addRoute();

  app.use(router.routes())
    .use(router.allowedMethods())
}

module.exports = pageRoute
