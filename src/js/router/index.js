import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/templates/Home';
import ItemDetail from '@/components/templates/ItemDetail';

Vue.use(Router);

export const NAMES = {
  ROOT: '新着一覧',
  ITEM: '記事の詳細',
};

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/items/:articleId',
      name: NAMES.ITEM,
      component: ItemDetail,
    },
    {
      path: '/',
      name: NAMES.ROOT,
      component: Home,
    },
    {
      path: '/*',
      redirect: { name: NAMES.ROOT },
    },
  ],
});
