<template>
  <div>
    <b-card title="Cadastrar Produto" class="m-3">
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

        <b-row>
          <b-col>
            <b-form-group label="">
              <b-form-checkbox
                v-model="form.delivery"
                name="check-button"
                class="mt-4"
                :switch="true"
                padding
              >
                Habilitar Entrega
              </b-form-checkbox>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Valor da entrega" v-if="form.delivery">
              <b-form-input
                id="delivery_price"
                name="delivery_price"
                type="number"
                v-model="form.delivery_price"
                required
                data-vv-as="Valor da entrega"
              ></b-form-input> </b-form-group
          ></b-col>
        </b-row>

        <b-row class="mt-3">
          <b-col>
            <vue-image-chooser
              v-if="!loading"
              height="120px"
              name="image-chooser1"
              :displayName="'Addd'"
              @change="(file) => uploadFile(file, 1)"
            />
          </b-col>
          <b-col>
            <vue-image-chooser
              v-if="!loading"
              height="120px"
              name="image-chooser2"
              :displayName="'Adicionar foto'"
              @change="(file) => uploadFile(file, 2)"
            />
          </b-col>
          <b-col>
            <vue-image-chooser
              v-if="!loading"
              height="120px"
              name="image-chooser3"
              :displayName="'Adicionar foto'"
              @change="(file) => uploadFile(file, 3)"
            />
          </b-col>
        </b-row>

        <div class="mt-3">
          <b-button type="submit" variant="success">
            <b-spinner small v-if="loading"></b-spinner>
            Cadastrar
          </b-button>
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
        delivery: false,
        delivery_price: 0,
        image_1: null,
        image_2: null,
        image_3: null,
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
        image_1: null,
        image_2: null,
        image_3: null,
        delivery: false,
        delivery_price: 0,
      };
    },
    uploadFile(file, id) {
      const reader = new FileReader();
      reader.readAsDataURL(file.file);
      reader.onloadend = () => {
        this.form[`image_${id}`] = reader.result;
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

<style lang="scss">
.image-uploader {
  box-shadow: none !important;
  background-position: center !important;
  label {
    padding-top: 1.5rem !important;
    padding-bottom: 1rem !important;
  }
  svg {
    width: 20px !important;
    height: 20px !important;
  }
  p {
    content: "test" !important;
    line-height: 6rem !important;
    text-align: center !important;
  }
}
</style>
