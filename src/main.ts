import { createApp } from "vue";
import App from "./App.vue";
import router from "./utils/router";
import 'vxe-table/lib/style.css'
import "@/assets/scss/main.scss";
import { createPinia } from "pinia"
import  persistedstate  from "pinia-plugin-persistedstate"

const pinia = createPinia();
const app = createApp(App);
pinia.use(persistedstate)
app.use(pinia)


app.use(router);
app.mount("#app");
