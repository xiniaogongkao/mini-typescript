<div align="center"><img src="https://i.loli.net/2020/09/09/Qo95yIfD2jAnYWi.png"/></div>
<h1 align="center">微信小程序 TypeScript 模版</h1>
<div align="center">用于创建小程序[持续更新...]</div>

### 快速开始

#### 克隆项目
```
$ git clone https://github.com/xiniaogongkao/MiniProgram-TypeScript.git
```

#### 开发环境
- 需要安装[NodeJS](https://nodejs.org/en/)
- 需要[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)

#### 安装依赖
```bash
# 在项目根目录输入以下命令
$ npm install
```
> 不推荐使用`cnpm`安装依赖，有报错风险

#### 运行
```bash
# 在项目根目录输入
$ npm run dev:mp-weixin
```
- 运行编译后，为 `dist/dev/mp-weixin` 目录
- 使用微信开发者工具导入该目录既可开发运行

#### 打包
```bash
# 在项目根目录输入
$ npm run build:mp-weixin
```
- 打包编译后，为 `dist/build/mp-weixin` 目录
- 其余小程序平台可查看`package.json`文件

---

Copyright 2020 [犀鸟教育集团](https://www.xiniaogongkao.com/)
