<template>
  <button class="enhanced" @click="click">
    <div class="more">
      もっと見る
    </div>
  </button>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('click');
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
