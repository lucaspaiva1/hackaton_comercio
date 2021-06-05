<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group label="Quem sou eu?">
        <b-form-select
          class="form-control"
          v-model="user_type"
          :options="user_options"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group :label="nameInputLabel">
        <b-form-input
          id="name"
          name="name"
          v-model="form.name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="CPF/CNPJ">
        <b-form-input
          id="document"
          name="document"
          v-model="form.document"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Senha">
        <b-form-input
          id="password"
          name="password"
          type="password"
          v-model="form.password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group v-if="user_type === 'supplier'" label="Telefone">
        <b-form-input
          id="phone"
          name="phone"
          v-model="form.phone"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group v-if="user_type === 'supplier'" label="Endereço">
        <b-form-input
          id="address"
          name="address"
          v-model="form.address"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group v-if="user_type === 'supplier'" label="Número">
        <b-form-input
          id="address-number"
          name="address-number"
          v-model="form.address_number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group v-if="user_type === 'supplier'" label="Bairro">
        <b-form-input
          id="address-district"
          name="address-district"
          v-model="form.district"
          required
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
        <b-button type="submit" variant="success">
          <b-spinner small v-if="loading"></b-spinner>
          Cadastrar
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import API from "@/api";
export default {
  name: "RegisterForm",
  data() {
    return {
      form: {
        name: null,
        city: null,
        document: null,
        password: null,
        phone: null,
        address: null,
        number: null,
        district: null,
      },
      loading: false,
      user_type: null,
      user_options: [
        { value: null, text: "Escolha uma opção" },
        { value: "supplier", text: "Lojista" },
        { value: "affiliate", text: "Vendedor Afiliado" },
      ],
      city_options: [
        { value: null, text: "Escolha uma cidade" },
        { value: "Feira de Santana - BA", text: "Feira de Santana" },
        { value: "Salvador - BA", text: "Salvador" },
      ],
    };
  },
  computed: {
    nameInputLabel() {
      return this.user_type === "supplier"
        ? "Nome do estabelecimento"
        : "Nome Completo";
    },
  },
  methods: {
    createAffiliate() {
      return API.createAffiliate(this.form);
    },
    createSupplier() {
      return API.createSupplier(this.form);
    },
    async onSubmit() {
      this.loading = true;
      let response;
      try {
        if (this.user_type === "affiliate") {
          response = this.createAffiliate();
        }
        if (this.user_type === "supplier") {
          response = this.createSupplier();
        }
        localStorage.setItem(
          "current_user",
          JSON.stringify({
            user: response.data,
            user_type: this.user_type,
          })
        );
        this.$router.push({ path: `/${this.user_type}` });
      } catch (err) {
        console.error(err);
      }
      this.loading = false;
    },
  },
};
</script>
