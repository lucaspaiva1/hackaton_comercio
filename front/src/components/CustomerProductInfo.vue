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
        <small
          >Quantidade disponível:
          <b>{{ product.quantity }} {{ quantityLabel }}</b></small
        >
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
</style>
