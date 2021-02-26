<template>
  <div>
    <Header :title="title" />

    <ol>
      <li v-for="item in contents" :key="item.id">
        {{ item.title }}
      </li>
    </ol>

    <router-link :to="link.to">
      {{ link.label }}
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { NAMES } from '@/router';
import Header from '@/components/Header';

export default {
  components: {
    Header,
  },
  data: () => ({
    title: NAMES.HOME,
    link: {
      label: `${NAMES.CONTENT}へ移動`,
      to: { name: NAMES.CONTENT },
    },
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
