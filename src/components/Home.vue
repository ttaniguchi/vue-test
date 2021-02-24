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
import { NAMES } from './../router';

export default {
  data: () => ({
    title: NAMES.HOME,
    link: {
      label: `${NAMES.CONTENT}へ移動`,
      to: { name: NAMES.CONTENT },
    },
  }),
  beforeCreate: () => console.log('beforeCreate'),
  created: () => console.log('created'),
  beforeMount: () => console.log('beforeMount'),
  mounted: () => console.log('mounted'),
  beforeUpdate: () => console.log('beforeUpdate'),
  updated: () => console.log('updated'),
  beforeDestroy: () => console.log('beforeDestroy'),
  destroyed: () => console.log('destroyed')
};
</script>
