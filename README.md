# React-redux-base

1. 当你使用ExtractTextPlugin时，因为这个插件本身的原因，修改css文件是不会更新的，所以在dev的时候可以不使用这个插件。
2. webpack-dev-middleware module update need accept
```js
// webapck-dev-middleware
if (module.hot) {
module.hot.accept();
}
```
