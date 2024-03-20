// import './assets/main.css'
import "@arco-design/web-vue/dist/arco.css";
import "@/access";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import ArcoVue from "@arco-design/web-vue";
import store from "@/store";

const app = createApp(App);

app.use(router);
app.use(ArcoVue);
app.use(store);

app.mount("#app");
