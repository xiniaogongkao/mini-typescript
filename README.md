#### 微信小程序 TypeScript 模版

#### 一，安装依赖
- 在项目根目录输入以下命令
```
npm install
```
> 不推荐使用`cnpm`安装依赖，有报错风险

#### 二，开发
- 可使用 vs code 打开项目
- 在根目录开启命令行并输入以下命令，开启 dev 模式
```
npm run dev:mp-weixin
```
- 编译好的 dev 包路径为 `dist/dev/mp-weixin`，使用微信开发者工具导入此目录即可开发

#### 三，打包
- 使用以下命令打包编译为微信小程序
- 打包好的 release 包路径为 `dist/build/mp-weixin`
```
npm run build:mp-weixin
```
- 其余小程序平台可查看`package.json`文件