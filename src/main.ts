import { createApp } from "vue";
import App from "./App.vue";
import "./tailwind.css";

import VeeValidatePlugin from "./plugins/VeeValidatePlugin";

const app = createApp(App);

app.use(VeeValidatePlugin).mount("#app");
