<template>
  <v-container class="d-flex justify-center" fill-height>
    <v-card color="bgsecondary" min-width="400px">
      <v-card-title class="d-flex justify-center"
        ><p class="text-h3">LOGIN</p></v-card-title
      >
      <v-form ref="form" @submit.prevent="submitForm">
        <v-card-text>
          <v-text-field
            class="text-h6"
            v-model="form.name"
            color="accent"
            label="Name"
            :rules="[rules.required]"
            :error-messages="nameError"
            append-icon="mdi-account"
            required
            @input="nameError = ''"
          ></v-text-field>
          <v-text-field
            class="text-h6"
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            color="accent"
            label="Password"
            :rules="[rules.required]"
            :error-messages="passwordError"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            required
            @input="passwordError = ''"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="bgprimary">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" :disabled="!formIsValid" type="submit">
            Submit
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import { auth } from "@/main";
import router from "@/router";
import Vue, { defineComponent } from "vue";

export default Vue.extend({
  data() {
    const defaultForm = { name: "", password: "" };
    return {
      form: Object.assign({}, defaultForm),
      defaultForm,
      nameError: "",
      passwordError: "",
      rules: {
        required: (val: string) => !!val || "Required",
      },
      showPassword: false,
    };
  },
  computed: {
    formIsValid(): any {
      return (
        this.form.name &&
        this.form.password &&
        !this.nameError &&
        !this.passwordError
      );
    },
  },
  methods: {
    submitForm() {
      this.form.name = this.form.name.trim();
      auth(this.form.name)
        .then((res) => {
          if (res) {
            localStorage.setItem("user", this.form.name);
            router.push("/");
            return;
          } else {
            this.nameError = "User not found";
            return;
          }
        })
        .catch((err) => {
          console.log(err);
          return;
        });
    },
  },
});
</script>
<style scoped>
.h-100 {
  height: 100%;
}
</style>
