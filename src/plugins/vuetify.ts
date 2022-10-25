import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#9893da",
        secondary: "#797a9e",
        accent: "#bbbdf6",
        bgprimary: "#1F2232",
        bgsecondary: "#625F63",
      },
    },
  },
});
