<template>
  <button class="enhanced" @click="onClick">
    <div class="more">
      もっと見る
    </div>
  </button>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>

<style scoped>
.more {
  align-items: center;
  display: flex;
  height: 96px;
  justify-content: center;
}
</style>
