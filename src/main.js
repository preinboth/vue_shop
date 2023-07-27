import { createApp } from "vue";

import App from "./App.vue";
import store from "./store/index";
import router from "./router/index";

// import { createMetaManager } from "vue-meta";
// import VueMeta from "vue-meta";

const app = createApp(App)
    .use(store)
    .use(router)
    // .use(createMetaManager());
    // .use(VueMeta)

await router.isReady();
app.mount("#app");
