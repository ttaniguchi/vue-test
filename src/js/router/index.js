import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/templates/Home';
import Content from '@/components/templates/Content';

Vue.use(Router);

export const NAMES = {
  HOME: '新着一覧',
  CONTENT: '記事の詳細',
};

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/contents/:articleId',
      name: NAMES.CONTENT,
      component: Content,
    },
    {
      path: '/',
      name: NAMES.HOME,
      component: Home,
    },
    {
      path: '/*',
      redirect: { name: NAMES.HOME },
    },
  ],
});
