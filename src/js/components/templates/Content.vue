<template>
  <div>
    <default-header :title="title" />

    <router-link :to="link">
      戻る
    </router-link>
  </div>
</template>

<script>
import { NAMES } from '@/router';
import Header from '@/components/organisms/Header';

export default {
  components: {
    'default-header': Header,
  },
  data: () => ({
    title: NAMES.CONTENT,
    link: { name: NAMES.HOME },
  }),
};
</script>
