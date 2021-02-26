<template>
  <div>
    <default-header :title="title" :link="link" />

    <div class="title">
      {{ current.title }}
    </div>
    <article
      class="inline-article"
      v-if="current.rendered_body"
      v-html="current.rendered_body"
    />
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

<style module>
.inline-article {
  padding: 24px;
}
.inline-article blockquote {
  border-left: 5px solid #dddddd;
  color: #777777;
  padding: 1em;
  padding-right: 0;
  margin: 1.5em 0;
}
.inline-article pre {
  background: #444444;
  color: #ffffff;
  padding: 8px;
}
.inline-article img {
  box-sizing: border-box;
  padding: 32px;
  width: 100%;
}
</style>

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
