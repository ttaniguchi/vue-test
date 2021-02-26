<template>
  <div>
    <default-header :title="title" />

    <router-link :to="link">
      戻る
    </router-link>

    <article v-if="current.rendered_body">
      <span v-html="current.rendered_body"></span>
    </article>

    <router-link :to="link">
      戻る
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { NAMES } from '@/router';
import Header from '@/components/organisms/Header';

export default {
  components: {
    'default-header': Header,
  },
  data: () => ({
    title: NAMES.CONTENT,
    link: { name: NAMES.HOME },
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
