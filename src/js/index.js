import Vue from 'vue';
import App from '@/components/App.vue';
import router from '@/router';
import store from '@/store';

new Vue({
  el: '#app',
  components: {
    App,
  },
  router,
  store,
  template: '<App />',
});
