<template>
  <form class="search" @submit="submit">
    <input class="search" v-model="keyword" />
    <div class="icon" @click="submit">
      <icon-search color="#000000" />
    </div>
  </form>
</template>

<script>
import IconSearch from '@/components/atoms/IconSearch';

export default {
  props: {
    value: {
      type: String,
      default: '',
      required: false,
    },
  },
  components: {
    'icon-search': IconSearch,
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
.icon {
  display: inline-flex;
  position: absolute;
  right: 24px;
}
form.search {
  align-items: center;
  display: flex;
  padding: 16px;
  position: relative;
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
  padding: 0 36px 0 12px;
  width: 100%;
}
</style>
