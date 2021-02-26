<template>
  <div>
    <default-header :title="title" />

    <div v-for="item in contents.data" :key="item.id">
      <button class="enhanced" @click="linkTo(item.id)">
        <article-card :item="item" />
      </button>
    </div>

    <div class="more" v-if="isLoading">
      読込中…
    </div>
    <button
      v-if="!isLoading && contents.next"
      class="enhanced"
      @click="getContents"
    >
      <div class="more">
        もっと見る
      </div>
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { NAMES } from '@/router';
import ArticleCard from '@/components/organisms/ArticleCard';
import Header from '@/components/organisms/Header';

export default {
  components: {
    'article-card': ArticleCard,
    'default-header': Header,
  },
  data: () => ({
    title: NAMES.HOME,
  }),
  computed: {
    // getters
    ...mapGetters({
      contents: 'newArticles',
      isLoading: 'isLoading',
    }),
  },
  methods: {
    linkTo(articleId) {
      this.$router.push({ name: NAMES.CONTENT, params: { articleId } });
    },
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

<style scoped>
.enhanced {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  padding: 0;
  width: 100%;
}
.enhanced:hover {
  background-color: rgba(0, 0, 0, 0.1);
  outline: none;
}
.enhanced:focus {
  background-color: rgba(0, 0, 0, 0.2);
  outline: none;
}
.more {
  align-items: center;
  display: flex;
  height: 96px;
  justify-content: center;
}
</style>
