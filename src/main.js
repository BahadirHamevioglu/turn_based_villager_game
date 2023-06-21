// MAIN
import { createApp } from "vue";

// FONT SOURCE
import "@fontsource-variable/inter";

// SCSS
import "./assets/scss/reset.scss";

// APP
import App from "./App.vue";

// CREATE APP
const app = createApp(App);

// ROUTER
import router from "./router/index.js";

// PINIA
import { createPinia } from "pinia";

// FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// FONT AWESOME ICONS
import {
  faSmile,
  faHeart,
  faWheatAwn,
  faFlask,
  faGem,
  faCoins,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

// ADD ICONS TO LIBRARY
library.add(
  faSmile,
  faHeart,
  faWheatAwn,
  faFlask,
  faGem,
  faCoins,
  faArrowRight
);

// CREATE PINIA
const pinia = createPinia();

// USE PINIA
app.use(pinia);

// USE ROUTER
app.use(router);

// MOUNT APP
app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
