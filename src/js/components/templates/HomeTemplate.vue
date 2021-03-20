<template>
  <div>
    <default-header :title="title" />
    <search-form :value="query" @submit="search" />
    <article-list :query="query" />
  </div>
</template>

<script>
import { NAMES } from '@/router';
import ArticleList from '@/components/organisms/ArticleList';
import SearchForm from '@/components/molecules/SearchForm.vue';
import DefaultHeader from '@/components/organisms/DefaultHeader';

export default {
  components: {
    'article-list': ArticleList,
    'default-header': DefaultHeader,
    'search-form': SearchForm,
  },
  data: () => ({
    query: null,
    title: NAMES.ROOT,
  }),
  watch: {
    $route() {
      this.query = this.$route.params.query || '';
    },
  },
  mounted() {
    this.query = this.$route.params.query || '';
  },
  methods: {
    search(query) {
      this.$router
        .push({
          name: NAMES.SEARCH,
          params: { query },
        })
        .catch(() => {});
    },
  },
};
</script>
