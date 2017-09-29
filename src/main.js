// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import * as App from './app';
// import router from './router';

require('./bootstrap');

Vue.config.productionTip = false;


new Vue(App).$mount('#app');

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App },
// });
