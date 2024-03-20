<template>
  <div>
    <vue-markdown :source="markdown"></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  data() {
    return {
      markdown: "# Hello, Vue Markdown!",
    };
  },
  components: {
    VueMarkdown,
  },
};
</script>
