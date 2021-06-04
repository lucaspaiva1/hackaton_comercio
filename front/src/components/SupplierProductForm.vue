<template>
  <div>
    <b-card title="Novo Produto" class="m-3">
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

        <b-form-group label="Descrição">
          <b-form-textarea
            class="form-control"
            placeholder="Descrição do produto"
            v-model="form.observations"
            required
            rows="4"
            max-rows="4"
          ></b-form-textarea>
        </b-form-group>

        <b-form-group label="Estoque">
          <b-form-input
            id="quantity"
            name="quantity"
            type="number"
            v-model="form.quantity"
            required
            data-vv-as="Estoque"
          ></b-form-input>
        </b-form-group>

        <b-row>
          <b-col
            ><b-form-group label="Preço">
              <b-form-input
                id="price"
                name="price"
                type="number"
                v-model="form.price"
                required
                data-vv-as="Preço"
              ></b-form-input> </b-form-group
          ></b-col>
          <b-col
            ><b-form-group label="Comissão">
              <b-form-input
                id="comission"
                name="comission"
                type="number"
                v-model="form.comission"
                required
                data-vv-as="Comissão"
              ></b-form-input> </b-form-group
          ></b-col>
        </b-row>

        <div class="mt-3">
          <b-button type="submit" variant="success">Cadastrar</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import API from "@/api";

export default {
  name: "SupplierProductForm",
  data() {
    return {
      form: {
        name: "",
        observations: "",
        price: 0,
        comission: 0,
        quantity: 0,
      },
      supplier: null,
      loading: false,
    };
  },
  mounted() {
    this.supplier = JSON.parse(localStorage.getItem("current_user"));
  },
  methods: {
    createProduct() {
      const product = { ...this.form, SupplierId: this.supplier.user.id };
      product.price = parseFloat(product.price);
      product.comission = parseFloat(product.comission);
      product.quantity = parseFloat(product.quantity);
      return API.createProduct(product);
    },
    resetForm() {
      this.form = {
        name: "",
        observations: "",
        price: 0,
        comission: 0,
        quantity: 0,
      };
    },
    async onSubmit() {
      this.loading = true;
      try {
        await this.createProduct();
        this.resetForm();
        this.$emit("created");
      } catch (err) {
        console.error(err);
      }
      this.loading = false;
    },
  },
};
</script>
