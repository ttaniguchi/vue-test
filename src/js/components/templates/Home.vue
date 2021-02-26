<template>
  <div>
    <default-header :title="title" />

    <ol>
      <li v-for="item in contents" :key="item.id">
        <router-link :to="link(item.id)">
          {{ item.title }}
        </router-link>
      </li>
    </ol>
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
    title: NAMES.HOME,
    link: articleId => ({ name: NAMES.CONTENT, params: { articleId } }),
  }),
  computed: {
    // getters
    ...mapGetters({
      contents: 'newArticles',
    }),
  },
  methods: {
    // actions
    ...mapActions({
      getContents: 'fetchNewArticles',
    }),
  },
  mounted() {
    this.getContents();
  },
};
</script>
