<template>
  <div>
    <default-header :title="title" />
    <search-form />
    <new-article-list />
  </div>
</template>

<script>
import { NAMES } from '@/router';
import SearchForm from '@/components/molecules/SearchForm.vue';
import DefaultHeader from '@/components/organisms/DefaultHeader';
import NewArticleList from '@/components/organisms/NewArticleList';

export default {
  components: {
    'default-header': DefaultHeader,
    'new-article-list': NewArticleList,
    'search-form': SearchForm,
  },
  data: () => ({
    title: NAMES.ROOT,
  }),
};
</script>
