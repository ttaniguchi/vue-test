<template>
  <div>
    <default-header :title="title" />

    <new-list />
  </div>
</template>

<script>
import { NAMES } from '@/router';
import DefaultHeader from '@/components/organisms/DefaultHeader';
import NewList from '@/components/organisms/NewList';

export default {
  components: {
    'default-header': DefaultHeader,
    'new-list': NewList,
  },
  data: () => ({
    title: NAMES.ROOT,
  }),
};
</script>
