
# mm-ui [![Build Status](https://travis-ci.org/didi/cube-ui.svg?branch=master)](https://travis-ci.org/didi/cube-ui?branch=master) [![codecov.io](http://codecov.io/github/didi/cube-ui/coverage.svg?branch=master)](http://codecov.io/github/didi/cube-ui?branch=master) [![downloads](https://img.shields.io/npm/dm/cube-ui.svg)](https://www.npmjs.com/package/cube-ui)

> A mobile ui lib implement by Vue.

### 简介
分全局引入和按需引入两种情况。全局引用主要用于开发mm-ui，按需引入主要用于实际生产环境。

### 全局引入
1、在/example/index.html里屏蔽按需引入的部分
2、在/example/main.js里打开Vue和Cube的部分
```shell
import Vue from 'vue'
import Cube from '../src/index'
...
// var Vue = window.Vue
Vue.use(Cube)
```

### 按需引入
1、在/example/index.html里打开按需引入的部分
```shell
<!--Vue-->
<script src="https://cdn.bootcss.com/vue/2.5.22/vue.min.js"></script>
<!--mm-ui局部引入-->
<link rel="stylesheet" href="/static/mm-ui/background/background.min.css">
<script src="/static/mm-ui/background/background.min.js"></script>
<script>
  window.Vue.use(window.cube['background'])
</script>
```
2、在/example/main.js里屏蔽Vue和Cube的部分
```shell
// import Vue from 'vue'
// import Cube from '../src/index'
...
var Vue = window.Vue
// Vue.use(Cube)
```
3、先生成mm-ui的包，生成好后会在根目录下多一个lib包
```shell
npm run build
```
4、把生成好的lib包里面的内容复制到根目录下新建的static/mm-ui下


### Install
请用cnpm安装
```shell
cnpm i
```

### Development
```shell
npm run dev
```

### Build
```shell
npm run demo-build
```
打包后会在根目录下生成一个docs包，在docs/example下执行http-server即可打开页面

### 注意点
npm run build是用于生成mm-ui的
npm run demo-build是用于生成速推的

### 坑
不要用stylu,dev编译时很慢，严重影响开发效率

Recommend use the [CLI tools](https://github.com/cube-ui/cube-template) base on [vue-cli](https://github.com/vuejs/vue-cli) to init the config and base code:

```shell
$ vue init cube-ui/cube-template projectname
```

### Links

- [Home](https://didi.github.io/cube-ui/)
- [Docs](https://didi.github.io/cube-ui/#/en-US/docs)
- [Example](https://didi.github.io/cube-ui/example/)

  ![Example QR](./assets/example-qr.png)

- [Application Guide](https://github.com/cube-ui/cube-application-guide)

### Communication

![QQ Community QR](./assets/cube-qq-QR.jpg)

### New cube-ui project ?

Recommend use the [CLI tools](https://github.com/cube-ui/cube-template) base on [vue-cli](https://github.com/vuejs/vue-cli) to init the config and base code:

```shell
$ vue init cube-ui/cube-template projectname
```

### Install

```shell
npm install cube-ui --save
```

### Usage

```js
import Vue from 'vue'
import Cube from 'cube-ui'

Vue.use(Cube)
```

#### Use modularized cube-ui

```js
import Vue from 'vue'
import {
  /* eslint-disable no-unused-vars */
  Style,
  Button,
  ActionSheet
} from 'cube-ui'

Vue.use(Button)
Vue.use(ActionSheet)
```

For more information, please refer to [Quick Start](https://didi.github.io/cube-ui/#/en-US/docs/quick-start)

### ToDo

- More components

- Support theme

### Development

```shell
git clone git@github.com:didi/cube-ui.git
cd cube-ui
npm install
npm run dev
# or run document development
npm run doc-dev
```

### Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/didi/cube-ui/releases).
