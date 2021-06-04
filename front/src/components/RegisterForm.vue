<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group label="Quem sou eu?">
        <b-form-select
          class="form-control"
          v-model="user_type"
          :options="user_options"
        ></b-form-select>
      </b-form-group>

      <b-form-group label="Nome">
        <b-form-input
          id="name"
          name="name"
          v-model="form.name"
          required
          data-vv-as="Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="CPF/CNPJ">
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
      <b-form-group label="Cidade">
        <b-form-select
          class="form-control"
          v-model="form.city"
          :options="city_options"
          required
        ></b-form-select>
      </b-form-group>

      <div class="my-3">
        Já tem uma conta?
        <router-link to="/login">Entrar</router-link>
      </div>

      <div class="mt-3">
        <b-button type="submit" variant="success">Cadastrar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      form: {
        name: null,
        city: null,
        document: null,
        password: null,
      },
      user_type: null,
      user_options: [
        { value: null, text: "Escolha uma opção" },
        { value: "supplier", text: "Lojista" },
        { value: "affiliate", text: "Vendedor Afiliado" },
      ],
      city_options: [
        { value: null, text: "Escolha uma cidade" },
        { value: "Feira de Santana", text: "Feira de Santana" },
        { value: "Salvador", text: "Salvador" },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }

        alert("Form submitted!");
      });
    },
  },
};
</script>
