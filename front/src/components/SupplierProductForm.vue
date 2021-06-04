<template>
  <div>
    <b-card title="Novo Produto" tag="article" class="m-3">
      <b-form @submit.stop.prevent="onSubmit">
        <b-form-group label="Nome">
          <b-form-input
            id="name"
            name="name"
            v-model="form.name"
            required
            data-vv-as="Name"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Quantidade">
          <b-form-input
            id="quantity"
            name="quantity"
            v-model="form.quantity"
            required
            data-vv-as="Quantidade"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Preço">
          <b-form-input
            id="price"
            name="price"
            type="number"
            v-model="form.price"
            required
            data-vv-as="Preço"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Comissão">
          <b-form-input
            id="comission"
            name="comission"
            type="number"
            v-model="form.comission"
            required
            data-vv-as="Comissão"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Observações">
          <b-form-textarea
            class="form-control"
            placeholder="Observações sobre o produto"
            v-model="form.observations"
            required
            rows="4"
            max-rows="4"
          ></b-form-textarea>
        </b-form-group>

        <div class="mt-3">
          <b-button type="submit" variant="success">Cadastrar</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "SupplierProductForm",
  data() {
    return {
      form: {
        name: "",
        price: "",
        comission: "",
        quantity: "",
        observations: "",
      },
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
