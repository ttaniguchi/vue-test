<template>
  <div class="title">
    {{ current.title }}
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.title {
  border-bottom: 2px solid;
  color: #337ab7;
  font-size: 20px;
  font-weight: 800;
  line-height: 28px;
  margin: 16px;
  padding: 8px;
}
</style>
