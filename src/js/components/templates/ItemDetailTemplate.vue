<template>
  <div>
    <default-header :title="title" :link="link" />

    <article-header :current="current" />
    <article-body :current="current" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { NAMES } from '@/router';
import ArticleBody from '@/components/molecules/ArticleBody';
import ArticleHeader from '@/components/molecules/ArticleHeader';
import DefaultHeader from '@/components/organisms/DefaultHeader';

export default {
  components: {
    'article-body': ArticleBody,
    'article-header': ArticleHeader,
    'default-header': DefaultHeader,
  },
  data: () => ({
    title: NAMES.ITEM,
    link: { name: NAMES.ROOT },
  }),
  computed: {
    // getters
    ...mapGetters({
      current: 'currentArticle',
    }),
  },
  methods: {
    // actions
    ...mapActions({
      getCurrent: 'fetchCurrentArticle',
    }),
  },
  mounted() {
    this.getCurrent({ articleId: this.$route.params.articleId });
  },
};
</script>

<style scoped>
.title {
  border-bottom: 2px solid;
  color: #337ab7;
  font-size: 20px;
  font-weight: 800;
  line-height: 28px;
  margin: 16px;
  padding: 8px;
}
</style>
