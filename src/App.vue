<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

/**
 * 全局初始化函数，全局单次调用的代码，都可以放在这里
 */
const doInit = () => {
  console.log("doInit");
};

onMounted(() => {
  doInit();
});
</script>

<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <RouterView />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<style scoped></style>
