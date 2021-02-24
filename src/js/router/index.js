import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Content from '@/components/Content';

Vue.use(Router);

export const NAMES = {
  HOME: 'home',
  CONTENT: 'content',
};

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: NAMES.HOME,
      component: Home,
    },
    {
      path: '/content',
      name: NAMES.CONTENT,
      component: Content,
    },
  ],
});
