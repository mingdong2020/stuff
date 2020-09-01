const path = require('path')
const seoConfig = require('./config.json')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
console.log("seoConfig");
module.exports = {
  publicPath: '/',
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: [ '/', '/account', '/garden', '/mitax', '/steamer', '/about', '/error', '/email' ],
        postProcessHtml: (context) => {
          const inform = {
            '/': seoConfig['home'],
            '/account': seoConfig['account'],
            '/garden': seoConfig['garden'],
            '/mitax': seoConfig['mitax'],
            '/steamer': seoConfig['steamer'],
            '/about': seoConfig['about'],
            '/error': seoConfig['error'],
            '/email': seoConfig['email'],
          }
          return context.html.replace(
            /<title>[^<]*<\/title>/i,
            `<meta name="author" content="`+ inform[context.route].author +`" /><meta name="keywords" content="` + inform[context.route].keywords + `" /><meta name="description" content="` + inform[context.route].description + `" /><title>` + inform[context.route].title + `</title>`
          )
        }
      })
    ]
  },
  chainWebpack: config => {
    config.module
    .rule('images')
    .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 244 }))
  },
  devServer: {
    port: 9090, // 端口
  },
  // devServer: {
  //   hot: true,
  //   https: false,
  //   hotOnly: true,
  //   headers: {
  //       'X-Requested-With': 'XMLHttpRequest'
  //   },
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 9090,
  //   open: false,
  //   allowedHosts: [
  //     process.env.VUE_APP_DOMAIN
  //   ],
  //   proxy:{
  //       '/api': {
  //           target: process.env.VUE_APP_DOMAIN,
  //           ws: true,
  //           changeOrigin: true,
  //           pathRewrite: {
  //             '^/api' : ''
  //           }
  //       }
  //   }, //设置代理
  //   before: app=> {}
  // }
}