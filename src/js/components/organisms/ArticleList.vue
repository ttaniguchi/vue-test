<template>
  <div>
    <text-loader :isLoading="isLoading" />

    <div v-for="item in items.data" :key="item.id">
      <button class="enhanced" @click="linkTo(item.id)">
        <article-card :item="item" />
      </button>
    </div>

    <div v-show="!isLoading && items.next">
      <more-button @click="fetchItems(items.next)" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { NAMES } from '@/router';
import MoreButton from '@/components/atoms/MoreButton.vue';
import TextLoader from '@/components/atoms/TextLoader.vue';
import ArticleCard from '@/components/molecules/ArticleCard.vue';

export default {
  props: {
    query: {
      type: String,
      default: '',
      required: false,
    },
  },
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
  watch: {
    query() {
      this.fetchItems();
    },
  },
  methods: {
    linkTo(articleId) {
      this.$router.push({ name: NAMES.ITEM, params: { articleId } });
    },
    fetchItems(page = 1) {
      this.fetchNewArticles({ page, query: this.query });
    },
    // actions
    ...mapActions({
      fetchNewArticles: 'fetchNewArticles',
    }),
  },
};
</script>
