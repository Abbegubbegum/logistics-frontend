<template>
  <v-container class="d-flex justify-center" fill-height>
    <v-card color="bgsecondary">
      <v-card-title class="d-flex align-center">LOGIN</v-card-title>
      <v-card-text class="pa-10">
        <v-form ref="form" @submit.prevent="submitForm">
          <v-text-field
            v-model="form.name"
            color="accent"
            label="Name"
            :rules="[rules.required]"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.password"
            type="password"
            color="accent"
            label="Password"
            :rules="[rules.required]"
            required
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn>Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary"> Submit </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    const defaultForm = { name: "", password: "" };
    return {
      form: Object.assign({}, defaultForm),
      defaultForm,
      rules: {
        required: (val: string) => !!val || "Required",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("submit");
    },
  },
});
</script>
<style scoped>
.h-100 {
  height: 100%;
}
</style>
