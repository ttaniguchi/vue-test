<template>
  <div>
    <p>{{ title }}</p>

    <br>
    <router-link :to="link.to">
      {{ link.label }}
    </router-link>
  </div>
</template>
<script>
import { NAMES } from '@/router';

export default {
  data: () => ({
    title: NAMES.CONTENT,
    link: {
      label: `${NAMES.HOME}へ移動`,
      to: { name: NAMES.HOME },
    },
  }),
};
</script>
