# vuedemo
## 简介： 这是个移动端的项目，内部已经封装了axios请求，用vw进行的适配,引入了mintui这个移动端的UI框架。
```postcss
   eslint
   mintui
   vw 
```
### 注意事项

      该转换在对img处理时，需对img样式进行修改，否则会导致手机端img不展示，在app.js中增加下列代码
```
img {
    content: normal !important;
  }
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


