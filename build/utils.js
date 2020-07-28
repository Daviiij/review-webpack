/*
 * @Date: 2020-05-29 14:30:17
 * @LastEditTime: 2020-07-28 10:57:15
 */

const path = require("path");

exports.cdnBaseHttp = "https://cdn.bootcdn.net/ajax/libs";
exports.externalConfig = [
  {
    name: "react",
    scope: "React",
    module: "umd",
    js:
      process.env.NODE_ENV === "development"
        ? "react.development.js"
        : "react.production.min.js",
  },
  {
    name: "react-dom",
    scope: "ReactDOM",
    module: "umd",
    js:
      process.env.NODE_ENV === "development"
        ? "react-dom.development.min.js"
        : "react-dom.production.min.js",
  },
];

exports.getModulesVersion = () => {
  let mvs = {};
  let regexp = /^npm_package_.{0,3}dependencies_/gi;
  for (let m in process.env) {
    // 从node内置参数中读取，也可直接import 项目文件进来
    if (regexp.test(m)) {
      // 匹配模块
      // 获取到模块版本号
      mvs[m.replace(regexp, "").replace(/_/g, "-")] = process.env[m].replace(
        /(~|\^)/g,
        ""
      );
    }
  }
  return mvs;
};

exports.getExternalModules = (config) => {
  let externals = {}; // 结果
  let dependencieModules = this.getModulesVersion(); // 获取全部的模块和版本号

  config = config || this.externalConfig; // 默认使用utils下的配置
  config.forEach((item) => {
    // 遍历配置
    if (item.name in dependencieModules) {
      let version = dependencieModules[item.name];
      // 拼接css 和 js 完整链接
      // item.css = item.css && [this.cdnBaseHttp, version, item.css].join("/");
      item.js =
        item.js &&
        `${this.cdnBaseHttp}/${item.name}/${version}/${
          item.module ? item.module + "/" + item.js : item.js
        }`;
      externals[item.name] = item.scope; // 为打包时准备
    } else {
      throw new Error("相关依赖未安装，请先执行npm install " + item.name);
    }
  });

  return externals;
};

exports.resolve = function (dir) {
  return path.resolve(__dirname, dir);
};
