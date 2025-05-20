import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Importa o roteador

const app = createApp(App);
app.use(router);
app.mount("#app");

document.head.insertAdjacentHTML("beforeend", `
    <!-- AdSense code -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5967689884232154"
     crossorigin="anonymous"></script>
    <!-- End AdSense code -->
  `);