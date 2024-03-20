<template>
  <div class="home">
    <img alt="OJ logo" src="../assets/oj-logo.svg" />
    <HelloWorld msg="欢迎来到YuOJ" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});
</script>
