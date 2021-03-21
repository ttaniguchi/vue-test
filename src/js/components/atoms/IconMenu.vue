<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :height="size"
    :width="size"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" :fill="color" />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#ffffff',
      required: false,
    },
    size: {
      type: Number,
      default: 24,
      required: false,
    },
  },
};
</script>
