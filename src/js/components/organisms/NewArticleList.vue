<template>
  <div>
    <text-loader :isLoading="isLoading" />

    <div v-for="item in items.data" :key="item.id">
      <button class="enhanced" @click="linkTo(item.id)">
        <article-card :item="item" />
      </button>
    </div>

    <div v-show="!isLoading && items.next">
      <more-button v-on:onClick="getItems" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { NAMES } from '@/router';
import MoreButton from '@/components/atoms/MoreButton';
import TextLoader from '@/components/atoms/TextLoader';
import ArticleCard from '@/components/molecules/ArticleCard';

export default {
  components: {
    'article-card': ArticleCard,
    'more-button': MoreButton,
    'text-loader': TextLoader,
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
