<template>
  <form class="search" @submit="submit">
    <input class="search" v-model="keyword" />
  </form>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
      required: false,
    },
  },
  computed: {
    keyword: {
      get() {
        return this.value;
      },
      set(value) {
        this.innerKeyword = value;
      },
    },
  },
  methods: {
    submit() {
      this.$emit('submit', this.innerKeyword);
    },
  },
};
</script>
<style scoped>
form.search {
  padding: 16px;
}
input.search {
  border-radius: 16px;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  line-height: 32px;
  outline: none;
  padding: 0 16px;
  width: 100%;
}
</style>
