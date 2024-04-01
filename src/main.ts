import { createApp } from "vue";
import App from "./App.vue";
import router from "./utils/router";
import "@/assets/scss/main.scss";
import { createPinia } from "pinia"
const pinia = createPinia();
const app = createApp(App);
app.use(pinia)
app.use(router);
app.mount("#app");
