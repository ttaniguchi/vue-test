<template>
  <div>
    <div v-for="item in items.data" :key="item.id">
      <button class="enhanced" @click="linkTo(item.id)">
        <article-card :item="item" />
      </button>
    </div>

    <div class="loading" v-if="isLoading">
      読込中…
    </div>
    <div v-if="!isLoading && items.next">
      <more-button v-on:onClick="getItems" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { NAMES } from '@/router';
import MoreButton from '@/components/atoms/MoreButton';
import ArticleCard from '@/components/organisms/ArticleCard';

export default {
  components: {
    'article-card': ArticleCard,
    'more-button': MoreButton,
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
    // actions
    ...mapActions({
      getItems: 'fetchNewArticles',
    }),
  },
  mounted() {
    this.getItems();
  },
};
</script>

<style scoped>
.loading {
  align-items: center;
  display: flex;
  height: 96px;
  justify-content: center;
}
</style>
