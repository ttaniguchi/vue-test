<template>
  <img class="avatar" :src="src" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style scoped>
.avatar {
  border-radius: 48px;
  height: 48px;
  width: 48px;
}
</style>
