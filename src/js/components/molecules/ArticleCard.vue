<template>
  <div class="root">
    <div class="left">
      <avatar-image :src="item.user.profile_image_url" />
    </div>
    <div class="right">
      <div>{{ item.created_at | fromNow }}</div>
      <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import AvatarImage from '@/components/atoms/AvatarImage.vue';

export default {
  components: {
    'avatar-image': AvatarImage,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  filters: {
    fromNow: date => moment(date).fromNow(),
  },
};
</script>

<style scoped>
.root {
  box-sizing: border-box;
  color: #aaaaaa;
  display: flex;
  height: 88px;
  justify-content: flex-start;
  padding: 16px;
}
.root > .left {
  width: 48px;
}
.root > .right {
  box-sizing: border-box;
  padding-left: 8px;
  text-align: left;
  width: calc(100% - 48px);
}
.title {
  color: #337ab7;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
