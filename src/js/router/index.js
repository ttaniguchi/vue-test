import Vue from 'vue';
import Router from 'vue-router';

import HomeTemplate from '@/components/templates/HomeTemplate';
import ItemDetailTemplate from '@/components/templates/ItemDetailTemplate';

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
      component: ItemDetailTemplate,
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
