import Vue from 'vue';
import Router from 'vue-router';

import HomeTemplate from '@/components/templates/HomeTemplate';
import ItemDetailTemplate from '@/components/templates/ItemDetailTemplate';

Vue.use(Router);

export const NAMES = {
  ROOT: '新着',
  SEARCH: '検索',
  ITEM: '詳細',
};

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/items/:articleId',
      name: NAMES.ITEM,
      component: ItemDetailTemplate,
    },
    {
      path: '/search/:query',
      name: NAMES.SEARCH,
      component: HomeTemplate,
    },
    {
      path: '/',
      name: NAMES.ROOT,
      component: HomeTemplate,
    },
    {
      path: '/*',
      redirect: { name: NAMES.ROOT },
    },
  ],
});
