<template>
  <article
    class="article-render"
    v-if="current.rendered_body"
    v-html="current.rendered_body"
  />
</template>

<script>
export default {
  props: {
    current: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style module>
.article-render {
  padding: 24px;
}
.article-render a {
  word-break: break-all;
}
.article-render blockquote {
  border-left: 5px solid #dddddd;
  color: #777777;
  padding: 1em;
  padding-right: 0;
  margin: 1.5em 0;
}
.article-render pre {
  background: #444444;
  color: #ffffff;
  overflow-x: scroll;
  padding: 8px;
}
.article-render img {
  box-sizing: border-box;
  padding: 32px;
  width: 100%;
}
</style>
