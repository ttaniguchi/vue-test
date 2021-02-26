<template>
  <div>
    <default-header :title="title" />

    <new-list v-on:getItems="getItems()" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { NAMES } from '@/router';
import DefaultHeader from '@/components/organisms/DefaultHeader';
import NewList from '@/components/organisms/NewList';

export default {
  components: {
    'default-header': DefaultHeader,
    'new-list': NewList,
  },
  data: () => ({
    title: NAMES.ROOT,
  }),
  methods: {
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
