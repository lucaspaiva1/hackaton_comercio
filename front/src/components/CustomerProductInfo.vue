<template>
  <div>
    <b-card title="" class="m-3">
      <div>
        <h3>
          {{ product.name }}
        </h3>
      </div>
      <div class="mt-3">
        <h4 class="product-price">R$ {{ product.price.toFixed(2) }}</h4>
      </div>
      <div class="mt-4">
        <small>
          Quantidade disponível:
          <b>{{ product.quantity }} {{ quantityLabel }}</b>
        </small>
      </div>
      <div>
        <h6>Opções de envio</h6>
        <b-table
          id="delivery_methods"
          striped
          :fields="fields"
          :items="deliveryTypes"
          borderless
        ></b-table>
      </div>
      <hr class="my-4" />
      <div class="w-100">
        <b-button
          class="w-100"
          block
          size="lg"
          variant="success"
          @click="submit"
        >
          <b-spinner v-if="loading" small />
          Comprar agora
        </b-button>
      </div>
    </b-card>

    <b-card class="m-3">
      <h6 class="supplier-header">
        Informações sobre a loja
      </h6>
      <div>
        <h3>
          Paulo Acessórios
        </h3>
      </div>
      <div class="mt-3">
        <p class="address text-secondary">
          Av. Rebouças, nº 300, Centro.
          <br />
          Feira de Santana - BA
          <br />
          <br />
          (75) 99999-1414
        </p>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "AffiliateProductInfo",
  props: ["product"],
  data() {
    return {
      currentImage: null,
      loading: false,
      fields: [
        {
          key: "type",
          label: "",
        },
        {
          key: "price",
          label: "",
        },
      ],
      deliveryTypes: [
        {
          type: "Retirada no local",
          price: "R$ 0,00",
        },
        {
          type: "Entrega",
          price: "R$ 7,50",
        },
      ],
    };
  },
  mounted() {
    this.currentImage = this.product.image_1;
  },
  computed: {
    quantityLabel() {
      return this.product.quantity > 1 ? "unidades" : "unidade";
    },
  },
  methods: {
    showImage(image) {
      this.currentImage = image;
    },
    async submit() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push("/affiliate");
      }, 200);
    },
  },
};
</script>

<style lang="scss">
h4.product-price {
  font-weight: 200 !important;
  font-size: 35px;
  font-weight: 500;
}
.supplier-header {
  font-weight: 300;
  font-size: 16px;
}
.address {
  font-size: 15px;
}
#delivery_methods {
  td {
    color: #444444 !important;
    font-size: 16px;
  }
}
</style>
