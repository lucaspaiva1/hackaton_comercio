require("dotenv").config();

import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import VueImageChooser from "vue-image-chooser";
import Clipboard from "v-clipboard";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(VueImageChooser);
Vue.use(Clipboard);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
