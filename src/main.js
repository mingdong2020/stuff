import { createApp } from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import { injectScript } from "@/assets/js/usualUtils.js"

process.env.NODE_ENV === "production" ? "" : injectScript("/statics/js/vconsole.min.js")

router.beforeEach((to, from, next) => {
  if (to.name == "Error") {
    store.commit("setStateHead", false);
  }
  if (location.href.includes("mdqygl.cn")) {
    store.commit("setStateHead", false);
  }
  if (to.name == "Home") {
    store.commit("setStateType", true);
  } else {
    store.commit("setStateType", false);
  }
  store.commit("setStateToggle", false);
  store.commit("setStateIndex", to.meta.key || "home");
  next();
})

createApp(App).use(store).use(router).mount("#app")
