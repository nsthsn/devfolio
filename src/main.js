import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import Vuex from 'vuex';
// import cloudinary from 'cloudinary-core';
//import VueAnalytics from 'vue-analytics'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

// import Vue from 'vue'
import VueMasonry from 'vue-masonry-css'
 
Vue.use(VueMasonry);

// Vue.use(VueAnalytics, {
//   id: 'UA-178006501-1'
// });

// const cloudinaryCore = new cloudinary.Cloudinary({cloud_name:'mooncalf'});
Vue.use(Vuex);

Vue.config.productionTip = false;

document.title = 'Nathan Walker Portfolio';

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

