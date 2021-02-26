<template>
  <router-view />
</template>

<style module>
body {
  margin: 0;
}
.enhanced {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  padding: 0;
  width: 100%;
}
.enhanced:hover {
  background-color: rgba(0, 0, 0, 0.1);
  outline: none;
}
.enhanced:focus {
  background-color: rgba(0, 0, 0, 0.2);
  outline: none;
}
</style>
