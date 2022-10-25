import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

export const API_URL = "http://localhost:3000/";

fetch(API_URL)
  .then((res) => {
    if (!res.ok) {
      console.error(res.statusText);
    }
  })
  .catch((err) => {
    console.error(err);
  });

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

export async function auth(name: string): Promise<boolean> {
  const res = await fetch(API_URL + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  }).catch((err) => {
    console.log(err);
    return false;
  });

  if (typeof res === "boolean") {
    return res;
  }

  return res.status === 200;
}
