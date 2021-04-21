const path = require("path")
const seoConfig = require("./config.json")
const PrerenderSPAPlugin = require("prerender-spa-plugin")
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
  publicPath: "/",
  // publicPath: process.env.NODE_ENV === "production" ? './' : '/',
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: productionGzipExtensions,
        threshold: 2048,
        minRatio: 0.8
      }),
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "dist"),
        routes: [ "/", "/account", "/garden", "/mitax", "/steamer", "/equity", "/stock", "/detail", "/about", "/error", "/email" ],
        postProcessHtml: (context) => {
          const inform = {
            "/":        seoConfig["home"],
            "/account": seoConfig["account"],
            "/garden":  seoConfig["garden"],
            "/mitax":   seoConfig["mitax"],
            "/steamer": seoConfig["steamer"],
            "/equity":  seoConfig["equity"],
            "/stock":   seoConfig["stock"],
            "/detail":  seoConfig["detail"],
            "/about":   seoConfig["about"],
            "/error":   seoConfig["error"],
            "/email":   seoConfig["email"],
          }
          return context.html.replace(
            /<title>[^<]*<\/title>/i,
            `<title>` + inform[context.route].title + `</title><meta name="author" content="`+ inform[context.route].author +`" /><meta name="keywords" content="` + inform[context.route].keywords + `" /><meta name="description" content="` + inform[context.route].description + `" /><script>(function(doc,win){var docEl=doc.documentElement,resizeEvt="orientationchange" in window?"orientationchange":"resize",recalc=function(){var clientWidth=docEl.clientWidth;if(!clientWidth){return}if(clientWidth>=750&&clientWidth<=1000){docEl.style.fontSize=100+"px"}else{if(clientWidth>=1000){docEl.style.fontSize=100*(1000/750)+"px"}else{docEl.style.fontSize=100*(clientWidth/750)+"px"}}};if(!doc.addEventListener){return}win.addEventListener(resizeEvt,recalc,false);recalc()})(document,window);document.oncontextmenu=function(){return false};document.onselectstart=function(){return false};document.oncopy=function(){return false};</script><script>var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?9d766595429dee509e83f70ee3139600";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})();</script>`
            // `<title>` + inform[context.route].title + `</title><meta name="author" content="`+ inform[context.route].author +`" /><meta name="keywords" content="` + inform[context.route].keywords + `" /><meta name="description" content="` + inform[context.route].description + `" /><script>(function(doc,win){var docEl=doc.documentElement,resizeEvt="orientationchange" in window?"orientationchange":"resize",recalc=function(){var clientWidth=docEl.clientWidth;if(!clientWidth){return}if(clientWidth>=750&&clientWidth<=1000){docEl.style.fontSize=100+"px"}else{if(clientWidth>=1000){docEl.style.fontSize=100*(1000/750)+"px"}else{docEl.style.fontSize=100*(clientWidth/750)+"px"}}};if(!doc.addEventListener){return}win.addEventListener(resizeEvt,recalc,false);recalc()})(document,window);document.oncontextmenu=function(){return false};document.onselectstart=function(){return false};document.oncopy=function(){return false};</script><script type="text/javascript" src="https://kf9.kuaishang.cn/bs/ks.j?cI=930049&fI=63543&ism=1" charset="utf-8"></script><script>var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?9d766595429dee509e83f70ee3139600";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})();</script>`
          )
        }
      })
    ]
  },
  chainWebpack: config => {
    config.module
    .rule("images")
    .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, { limit: 244 }))
  },
  devServer: {
    port: 9090, // 端口
  }
}