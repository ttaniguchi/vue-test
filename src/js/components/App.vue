<template>
  <router-view />
</template>

<style module>
@import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);

body {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 100%;
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
