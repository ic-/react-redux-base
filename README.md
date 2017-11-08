# React-redux-base

1. 当你使用ExtractTextPlugin时，因为这个插件本身的原因，修改css文件是不会更新的，所以在dev的时候可以不使用这个插件。
2. webpack-dev-middleware module update need accept
```js
// webapck-dev-middleware
if (module.hot) {
module.hot.accept();
}
```
3. dll 无法配合html-webpack-plugin
```js
//并不起作用
const Manifest = require('../public/vendor-manifest.json')
  title: 'Development',
  name: 'inedx.html',
  template: './public/index.html',  // 根目录
  + vendorName: Manifest.name + '.js',
  + inject: true
```
