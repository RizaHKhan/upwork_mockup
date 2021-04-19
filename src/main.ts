import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/assets/css/breakpoints.scss";
import "@/assets/css/globals.scss";

createApp(App).use(store).use(router).mount("#app");
