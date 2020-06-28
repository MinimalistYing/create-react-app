# 如何使用
```
npx create-react-app your-app-name --template ying --scripts-version ying-react-scripts
```

## 说明
为了支持自定义一些配置，Fork from create-react-app  

`ying-react-scripts` 改动：
* `'@': path.resolve('./src')` 支持在项目中通过 `import xx from '@/compoments'` 的形式引入，方便组件移动目录。
* 使用 `less` 而不是 `sass`
* 使用 `standard.js` 来进行格式约束
* 移除了 `webpack` 中默认的 `eslint-loader`

`cra-template-ying` 改动：
* `.gitignore` 新增 `.VSCodeCounter`，不上传代码计数文件
* 在根目录增加公司部署用的 `cicd.yaml`
* 在根目录增加公司部署用的 `Dockerfile`
* 在根目录增加 Babel 配置文件 `.Babelrc`
* 移除原有的 `setupTests.js` `serviceWorker.js` `reportWebVitals.js` `App.test.js`, 因为暂时项目里用不到测试和 ServiceWorker
* 默认依赖 `antd | react-router | bape | the-fetch | standard | less | query-string`
* 提供默认的 Code-Spliting 模版
