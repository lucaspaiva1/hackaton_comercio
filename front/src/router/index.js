import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Supplier from "../views/Supplier.vue";
import Affiliate from "../views/Affiliate.vue";
import AffiliateProduct from "../views/AffiliateProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/supplier",
    name: "Supplier",
    component: Supplier,
  },
  {
    path: "/affiliate",
    name: "Affiliate",
    component: Affiliate,
  },
  {
    path: "/affiliate/product/:id",
    name: "AffiliateProduct",
    component: AffiliateProduct,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
