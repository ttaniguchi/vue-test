<template>
  <div>
    <default-header :title="title" />

    <new-article-list />
  </div>
</template>

<script>
import { NAMES } from '@/router';
import DefaultHeader from '@/components/organisms/DefaultHeader';
import NewArticleList from '@/components/organisms/NewArticleList';

export default {
  components: {
    'default-header': DefaultHeader,
    'new-article-list': NewArticleList,
  },
  data: () => ({
    title: NAMES.ROOT,
  }),
};
</script>
