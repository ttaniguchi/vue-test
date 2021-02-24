<template>
  <div>
    <div class="header">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>

<style scoped>
  .header {
    background: #55c500;
    color: white;
    font-size: 32px;
    line-height: 32px;
    padding: 16px;
  }
</style>
