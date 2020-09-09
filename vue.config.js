const path = require("path")
const seoConfig = require("./config.json")
const PrerenderSPAPlugin = require("prerender-spa-plugin")
module.exports = {
  publicPath: "/",
  // publicPath: process.env.NODE_ENV === "production" ? './' : '/',
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "dist"),
        routes: [ "/", "/account", "/garden", "/mitax", "/steamer", "/about", "/error", "/email" ],
        postProcessHtml: (context) => {
          const inform = {
            "/": seoConfig["home"],
            "/account": seoConfig["account"],
            "/garden": seoConfig["garden"],
            "/mitax": seoConfig["mitax"],
            "/steamer": seoConfig["steamer"],
            "/about": seoConfig["about"],
            "/error": seoConfig["error"],
            "/email": seoConfig["email"],
          }
          return context.html.replace(
            /<title>[^<]*<\/title>/i,
            `<meta name="author" content="`+ inform[context.route].author +`" />
            <meta name="keywords" content="` + inform[context.route].keywords + `" />
            <meta name="description" content="` + inform[context.route].description + `" />
            <script type="text/javascript" src="https://kf9.kuaishang.cn/bs/ks.j?cI=930049&fI=63543&ism=1" charset="utf-8">
            </script><script>var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?9d766595429dee509e83f70ee3139600";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})();</script>
            <title>` + inform[context.route].title + `</title>`
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