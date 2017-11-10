import Koa from 'koa';
import path from 'path';
import logger from 'koa-logger';
import koaBody from 'koa-body';
import pageRoute from './lib/pageRoute';
import webpack from './lib/webpack';

const app = new Koa();
app.use(require('koa-static')(path.join(__dirname, '../public'), {}));
app.use(logger());
app.use(koaBody());

webpack(app)
pageRoute(app)

app.listen(8081);

