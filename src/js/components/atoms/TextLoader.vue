<template>
  <div class="loading" v-show="isLoading">
    読込中…
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: true,
    },
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
