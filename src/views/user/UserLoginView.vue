<template>
  <div id="userLoginView">
    <h2 style="margin-bottom: 16px">用户登录</h2>
    <a-form
      style="max-width: 480px; margin: 0 auto"
      auto-label-width
      label-align="left"
      :model="form"
      @submit="handleSubmit"
    >
      <a-form-item field="userAccount" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入您的账号" />
      </a-form-item>
      <a-form-item field="userPassword" label="密码">
        <a-input-password
          v-model="form.userPassword"
          tooltip="密码不少于8位"
          placeholder="请输入您的密码"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="outline" @click="toRegister" style="width: 120px"
          >注册</a-button
        >
        <a-button type="primary" html-type="submit" style="width: 120px"
          >登录</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { UserLoginRequest } from "../../../generated";
import { UserControllerService } from "../../../generated";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import message from "@arco-design/web-vue/es/message";

const form = reactive({
  userAccount: "",
  userPassword: "",
} as UserLoginRequest);

const router = useRouter();
const store = useStore();

/**
 * 提交表单
 * @param data
 */
const handleSubmit = async () => {
  const res = await UserControllerService.userLoginUsingPost(form);
  if (res.code === 0) {
    // message.success("登录成功");
    await store.dispatch("user/getLoginUser");
    // 跳转到首页
    router.push({
      path: "/",
    });
  } else {
    message.error("登录失败" + res.message);
  }
};

const toRegister = () => {
  router.push({
    path: "/user/register",
  });
};
</script>
