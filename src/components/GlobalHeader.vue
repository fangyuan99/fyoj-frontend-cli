<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import ACCESS_ENUM from "@/access/accessEnum";

const router = useRouter();
const store = useStore();
const loginUser = store.state.user.loginUser;
// 展示在菜单的路由数组
const visibleRoutes = computed(() => {
  return routes.filter((item) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    if (checkAccess(loginUser, item?.meta?.access as string)) {
      return true;
    }
  });
});

const selectedKey = ref(["/"]);

router.afterEach((to, from) => {
  selectedKey.value = [to.path];
});
const doMenuClick = (key: string) => {
  // selectedKey.value = [key];
  router.push({ path: key });
};

// setTimeout(() => {
//   store.dispatch("user/getLoginUser", {
//     userName: "yupiAdmin",
//     userRole: ACCESS_ENUM.ADMIN,
//   });
// }, 3000);
</script>

<template>
  <a-row id="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu mode="horizontal" :selected-keys="selectedKey">
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          @click="doMenuClick('/')"
        >
          <div class="title-bar">
            <img src="../assets/oj-logo.svg" alt="" />
            <div class="title">YuOJ</div>
          </div>
        </a-menu-item>
        <a-menu-item
          v-for="item in visibleRoutes"
          :key="item.path"
          @click="doMenuClick(item.path)"
          >{{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div @click="router.push('user/login')">
        {{
          loginUser?.userName !== null
            ? loginUser?.userName
            : loginUser?.userName
            ? "未登录"
            : `user${loginUser?.id.toString().slice(0, 8)}`
        }}
      </div>
    </a-col>
  </a-row>
</template>

<style scoped>
.title-bar {
  //height: 48px; display: flex; align-items: center;
}

.title {
  color: #444;
  margin-left: 16px;
}
</style>
