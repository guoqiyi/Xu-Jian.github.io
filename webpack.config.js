'use strict';

const webpack = require("webpack");
module.exports = {
  context: __dirname + "/src",
  // __dirname指的是根目录

  entry: {
    app: "./app.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
  },
};



/* Webpack 基本做了下面这些事情：

 1. 从 context: 后面的根目录开始… 寻找 entry 里所有的文件名…

2. 读取entry 里所有文件的内容。
  在解析代码时，每一个通过 import（ES6） 或 require()（Node） 引入的依赖都会被打包到最终的构建结果当中。它会接着搜索那些依赖，以及那些依赖的依赖，直到“依赖树”的叶子节点 — 只打包它所需要的依赖，没有其他的东西。

3. Webpack 将所有东西打包到 output.path 对应的文件夹里，
  使用 output.filename 对应的命名模板来命名（[name] 被 entry 里的对象键值所替代）

*/

