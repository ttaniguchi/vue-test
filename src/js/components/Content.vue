<template>
  <div>
    <Header :title="title" />

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
  data: () => ({
    title: NAMES.CONTENT,
    link: {
      label: `${NAMES.HOME}へ移動`,
      to: { name: NAMES.HOME },
    },
  }),
};
</script>
