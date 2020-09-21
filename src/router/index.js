import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      key: "home"
    },
    component: Home
  },
  {
    path: "/account",
    name: "Account",
    meta: {
      key: "account"
    },
    component: () => import(/* webpackChunkName: "account" */ "../views/Account.vue")
  },
  {
    path: "/garden",
    name: "Garden",
    meta: {
      key: "garden"
    },
    component: () => import(/* webpackChunkName: "garden" */ "../views/Garden.vue")
  },
  {
    path: "/mitax",
    name: "Mitax",
    meta: {
      key: "mitax"
    },
    component: () => import(/* webpackChunkName: "mitax" */ "../views/Mitax.vue")
  },
  {
    path: "/steamer",
    name: "Steamer",
    meta: {
      key: "steamer"
    },
    component: () => import(/* webpackChunkName: "steamer" */ "../views/Steamer.vue")
  },
  {
    path: "/equity",
    name: "Equity",
    meta: {
      key: "equity"
    },
    component: () => import(/* webpackChunkName: "steamer" */ "../views/Equity.vue")
  },
  {
    path: "/stock/:key",
    name: "Stock",
    meta: {
      key: "stock"
    },
    component: () => import(/* webpackChunkName: "stock" */ "../views/Stock.vue")
  },
  {
    path: "/detail/:id",
    name: "Detail",
    meta: {
      key: "detail"
    },
    component: () => import(/* webpackChunkName: "detail" */ "../views/Detail.vue")
  },
  {
    path: "/email",
    name: "Email",
    meta: {
      key: "email"
    },
    component: () => import(/* webpackChunkName: "email" */ "../views/Email.vue")
  },
  {
    path: "/about",
    name: "About",
    meta: {
      key: "about"
    },
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
]

routes.push(
  {
    path: "/*",
    name: "404",
    component: () => import(/* webpackChunkName: "error" */ "../views/Error.vue")
  },
  {
    path: "/error/:code",
    name: "Error",
    component: () => import(/* webpackChunkName: "error" */ "../views/Error.vue")
  }
)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
