<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import { routes } from "@/router/routes";
import { useStore } from "vuex";
import { onMounted } from "vue";

/**
 * 全局初始化函数，全局单次调用的代码，都可以放在这里
 */
const doInit = () => {
  console.log("doInit");
};

onMounted(() => {
  doInit();
});

const router = useRouter();
const store = useStore();

router.beforeEach((to, from, next) => {
  if (to.meta?.access === "canAdmin") {
    // alert(1);
    if (store.state.user?.loginUser?.role !== "admin") {
      next("/noAuth");
      return;
    }
  }
  next();
});
</script>

<template>
  <BasicLayout />
</template>

<style scoped></style>
