import { createApp } from "vue";
import App from "./App.vue";

import "element-plus/dist/index.css";
import element from "element-plus";
import router from "../src/router/index";

let app = createApp(App);

app.use(router).use(element).mount("#app");
