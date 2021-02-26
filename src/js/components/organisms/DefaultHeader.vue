<template>
  <div class="layout">
    <div class="header">
      <div class="left" v-if="link">
        <router-link :to="link">
          <icon-arrow-back :size="32" />
        </router-link>
      </div>
      <div class="right">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
import IconArrowBack from '@/components/atoms/IconArrowBack.vue';

export default {
  components: {
    'icon-arrow-back': IconArrowBack,
  },
  props: {
    title: {
      type: String,
      default: '',
      required: false,
    },
    link: {
      type: Object,
      default: null,
      required: false,
    },
  },
};
</script>

<style scoped>
.layout {
  height: 64px;
}
.header {
  background: #55c500;
  color: white;
  display: flex;
  font-size: 24px;
  height: 64px;
  line-height: 32px;
  position: fixed;
  top: 0;
  width: 100%;
}
.header .left {
  box-sizing: border-box;
  margin-right: -16px;
  padding: 16px;
  width: 64px;
}
.header .right {
  padding: 16px;
  width: calc(100% - 64px);
}
</style>
