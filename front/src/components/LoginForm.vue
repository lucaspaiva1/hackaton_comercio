<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group label="Login">
        <b-form-input
          id="name"
          name="name"
          v-model="form.name"
          required
          data-vv-as="Name"
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
        <router-link to="/register">Cadastre-se </router-link>
      </div>

      <div class="mt-3">
        <b-button type="submit" variant="success">Entrar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        name: null,
        food: null,
      },
      loading: false,
    };
  },
  methods: {
    async login() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: { type: "supplier" } });
        }, 100);
      });
    },

    async onSubmit() {
      this.loading = true;
      try {
        const response = await this.login();
        if (response.data.type === "affiliate") {
          this.$router.push({ path: "/supplier" });
        } else {
          this.$router.push({ path: "/affiliate" });
        }
      } catch (err) {
        //
      }
      this.loading = false;
    },
  },
};
</script>
