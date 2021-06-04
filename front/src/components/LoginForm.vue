<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit">
      <div>
        <b-alert v-if="error" show variant="danger">
          {{ error }}
        </b-alert>
      </div>
      <b-form-group label="Usuário">
        <b-form-input
          id="username"
          name="username"
          v-model="form.username"
          required
          data-vv-as="Usuário"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Senha">
        <b-form-input
          id="password"
          name="password"
          type="password"
          v-model="form.password"
          required
          data-vv-as="Senha"
        ></b-form-input>
      </b-form-group>

      <div class="my-3">
        Não tem uma conta?
        <router-link to="/register">Cadastre-se</router-link>
      </div>

      <div class="mt-3">
        <b-button type="submit" variant="success">Entrar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import API from "@/api";

export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
      loading: false,
      error: null,
    };
  },
  methods: {
    async login() {
      const response = await API.login({ ...this.form });
      localStorage.setItem("current_user", JSON.stringify(response.data));
      return response;
    },

    async onSubmit() {
      this.error = null;
      this.loading = true;
      try {
        const response = await this.login();
        if (response.data.user_type === "affiliate") {
          this.$router.push({ path: "/affiliate" });
        } else {
          this.$router.push({ path: "/supplier" });
        }
      } catch (err) {
        this.error = "Credenciais Inválidas";
      }
      this.loading = false;
    },
  },
};
</script>
