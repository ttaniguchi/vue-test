<template>
  <div class="root">
    <div class="left-column">
      <img class="avatar" :src="item.user.profile_image_url" />
    </div>
    <div class="right-column">
      <div>{{ item.created_at | fromNow }}</div>
      <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
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
.left-column {
  text-align: left;
  width: 64px;
}
.right-column {
  text-align: left;
  width: calc(100% - 64px);
}
.avatar {
  border-radius: 48px;
  height: 48px;
  width: 48px;
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
