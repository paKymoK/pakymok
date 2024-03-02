import { createApp } from "vue";
import "./assets/tailwind.css";
import "./assets/css/style.css";
import App from "./App.vue";
import router from "./router";
import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import highchartsMore from "highcharts/highcharts-more";
import { createI18n } from "vue-i18n";
import enLocale from "@/assets/locale/en.json";
import viLocale from "@/assets/locale/vi.json";

// Create a Vue3 app
const app = createApp(App);

highchartsMore(Highcharts);
app.use(HighchartsVue, { Highcharts });

const messages = {
  en: {
    message: enLocale,
  },
  vi: {
    message: viLocale,
  },
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

app.use(i18n);

app.use(router).mount("#app");
