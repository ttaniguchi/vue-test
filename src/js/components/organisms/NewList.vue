<template>
  <div>
    <div v-for="item in items.data" :key="item.id">
      <button class="enhanced" @click="linkTo(item.id)">
        <article-card :item="item" />
      </button>
    </div>

    <div class="more" v-if="isLoading">
      読込中…
    </div>
    <button v-if="!isLoading && items.next" class="enhanced" @click="getItems">
      <div class="more">
        もっと見る
      </div>
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { NAMES } from '@/router';
import ArticleCard from '@/components/organisms/ArticleCard';

export default {
  components: {
    'article-card': ArticleCard,
  },
  computed: {
    // getters
    ...mapGetters({
      items: 'newArticles',
      isLoading: 'isLoading',
    }),
  },
  methods: {
    linkTo(articleId) {
      this.$router.push({ name: NAMES.ITEM, params: { articleId } });
    },
    getItems() {
      this.$emit('getItems');
    },
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
