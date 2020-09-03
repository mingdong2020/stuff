import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      key: 0
    },
    component: Home
  },
  {
    path: "/account",
    name: "Account",
    meta: {
      key: 1
    },
    component: () => import(/* webpackChunkName: "account" */ "../views/Account.vue")
  },
  {
    path: "/garden",
    name: "Garden",
    meta: {
      key: 2
    },
    component: () => import(/* webpackChunkName: "garden" */ "../views/Garden.vue")
  },
  {
    path: "/mitax",
    name: "Mitax",
    meta: {
      key: 3
    },
    component: () => import(/* webpackChunkName: "mitax" */ "../views/Mitax.vue")
  },
  {
    path: "/steamer",
    name: "Steamer",
    meta: {
      key: 4
    },
    component: () => import(/* webpackChunkName: "steamer" */ "../views/Steamer.vue")
  },
  {
    path: "/email/:client",
    name: "Email",
    meta: {
      key: 5
    },
    component: () => import(/* webpackChunkName: "email" */ "../views/Email.vue")
  },
  {
    path: "/about",
    name: "About",
    meta: {
      key: 6
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
