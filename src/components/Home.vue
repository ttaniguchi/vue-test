<template>
  <div>
    <p>Home</p>

    <br>
    <router-link to="/content">
      Go to content
    </router-link>
  </div>
</template>
<script>
export default {
  beforeCreate: () => console.log('beforeCreate'),
  created: () => console.log('created'),
  beforeMount: () => console.log('beforeMount'),
  mounted: () => console.log('mounted'),
  beforeUpdate: () => console.log('beforeUpdate'),
  updated: () => console.log('updated'),
  beforeDestroy: () => console.log('beforeDestroy'),
  destroyed: () => console.log('destroyed'),
};
</script>
