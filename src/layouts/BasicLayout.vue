<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <RouterView />
      </a-layout-content>
      <a-layout-footer class="footer">鱼 OJ </a-layout-footer>
    </a-layout>
  </div>
</template>
<style scoped>
#basicLayout {
}

#basicLayout .header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#basicLayout .content {
  //background: linear-gradient(to right, #aaa, #fff);
  margin-bottom: 16px;
  padding: 20px;
}

#basicLayout .footer {
  //background: rgb(128, 128, 128);
  margin-bottom: 16px;
  padding: 10px;
  left: 0;
  right: 0;
  text-align: center;
  position: sticky;
}
</style>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
