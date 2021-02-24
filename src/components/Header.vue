<template>
  <div>
    <p>{{ title }}</p>
    <br>
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
