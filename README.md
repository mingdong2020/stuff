# wealth

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 项目结构
                |- image 静态图片资源
                |      |- baseUtils.js   全局rem
     |- assets -|- js -|- usualUtils.js  通用用方法集合 
     |                 |- appUtils.js    常用方法集合
     |              |- Header.vue   页面头部固定栏
     |- components -|- Options.vue  页面右侧菜单栏
     |              |- Poster.vue   页面海报栏
     |
     |- router -| index.js
     |
     |- store -| index.js
     |
     |         |- About.vue   关于我们
     |         |- Account.vue 财务代理
     |         |- Garden.vue  园区直招
     |- views -|- Mitax.vue   爱税筹
     |         |- Steamer.vue 舟山自贸区
     |         |- Home.vue    首页
     |         |- Error.vue   错误页面
     |
     |- main.js 入口文件

### 项目
