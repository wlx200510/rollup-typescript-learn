## 从零搭建一个学习TypeScript脚手架

> 使用`rollup`来搭建这样一个脚手架，初始化一个写 TypeScript 的环境

原理：使用`rollup`来把`.ts`后缀的文件转换成`js`文件并输出，可以在学习时看前后差异。并且在开发`TypeScript`中熟悉相关脚手架的组成，大有裨益。

### 准备工作

初始化整个项目文件夹，生成`package.json`，并安装基本的依赖。

开发依赖有以下几个：

-   "husky" 用于自动格式化文件
-   "lint-staged" 自动lint
-   "npm-run-all": npm命令集合运行
-   "eslint" 代码风格检查
-   "babel-eslint" babel解析器
-   "prettier": 自动格式化
-   "typescript-eslint-parser" eslint 用于 ts 检查的解析器
-   "rollup": 核心工具, 这个建议全局安装，不建议放到本地(因为后续要装一堆)
-   "rollup-plugin-commonjs": "^9.1.0",
-   "rollup-plugin-node-resolve": "4.0.0",
-   "rollup-plugin-replace": "^2.0.0",
-   "rollup-plugin-uglify"  压缩工具
-   "serve" 服务器托管工具
-   "eslint-plugin-typescript" 使用eslint来校验ts
-   "rollup-plugin-typescript" 使用rollup来转换ts
-   "eslint-config-alloy" 使用AlloyTeam的 ESLint 来转换
-   "@typescript-eslint/eslint-plugin" 把 eslint 用于ts的解析插件

-   "typescript"
-   "tslib"        typescript解析库

配置参考仓库教程：https://github.com/AlloyTeam/eslint-config-alloy

ts代码打包成js代码

```shell
npm run build
```

开发过程

```
npm run dev
```
