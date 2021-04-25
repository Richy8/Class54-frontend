import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// IMPORT APPLICATION STYLING LINKS
import "bootstrap/dist/css/bootstrap.css";
import "../public/css/app.css";

//IMPORT AXIOS
import axios from "axios";
axios.defaults.baseURL = ``;

import { renderAssets } from "@/services/assetHelper";
import VueLazyload from "vue-lazyload";
import Meta from "vue-meta";

Vue.use(Meta);
Vue.use(VueLazyload);
Vue.mixin(renderAssets);

let EventBus = new Vue();
Vue.prototype.$bus = EventBus;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
