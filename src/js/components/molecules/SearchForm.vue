<template>
  <form class="search" @submit="search">
    <input class="search" v-model="query" />
  </form>
</template>

<script>
import { NAMES } from '@/router';

export default {
  computed: {
    query: {
      get() {
        return this.innerQuery;
      },
      set(value) {
        this.innerQuery = value;
      },
    },
  },
  data: () => ({
    innerQuery: '',
  }),
  watch: {
    $query() {
      this.innerQuery = (this.$route.params && this.$route.params.query) || '';
    },
  },
  mounted() {
    this.innerQuery = (this.$route.params && this.$route.params.query) || '';
  },
  methods: {
    search() {
      this.$router
        .push({
          name: NAMES.SEARCH,
          params: { query: this.query },
        })
        .catch(() => {});
    },
  },
};
</script>
<style scoped>
form.search {
  padding: 8px 16px;
}
input.search {
  display: flex;
  width: 100%;
  line-height: 30px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 18px;
  font-weight: bold;
}
</style>
