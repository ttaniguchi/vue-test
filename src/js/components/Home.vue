<template>
  <div>
    <Header :title="title" />

    <ol>
      <li v-for="item in list" :key="item.id">
        {{ item.title }}
      </li>
    </ol>

    <router-link :to="link.to">
      {{ link.label }}
    </router-link>
  </div>
</template>

<script>
import { NAMES } from '@/router';
import Header from '@/components/Header';

export default {
  components: {
    Header,
  },
  computed: {
    list() {
      return this.$store.getters.list;
    },
  },
  data: () => ({
    title: NAMES.HOME,
    link: {
      label: `${NAMES.CONTENT}へ移動`,
      to: { name: NAMES.CONTENT },
    },
  }),
  methods: {
    getList() {
      this.$store.dispatch('getList');
    },
  },
  mounted() {
    this.getList();
  },
};
</script>
