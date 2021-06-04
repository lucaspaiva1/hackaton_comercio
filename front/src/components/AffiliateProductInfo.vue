<template>
  <div>
    <b-card title="" class="m-3">
      <div>
        <h3>
          {{ product.name }}
        </h3>
      </div>
      <div class="mt-3">
        <small>Preço de venda</small>
        <h4 class="product-price">R$ {{ product.price.toFixed(2) }}</h4>
      </div>
      <div class="mt-3">
        <small>Comissão</small>
        <br />
        <h4 class="product-comission">R$ {{ product.comission.toFixed(2) }}</h4>
        <small>por unidade vendida</small>
      </div>
      <hr class="my-5" />
      <div class="w-100">
        <b-button
          class="w-100"
          block
          size="lg"
          variant="primary"
          @click="submit"
        >
          <b-spinner v-if="loading" small />
          Venda esse produto
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
  font-weight: normal;
}
h4.product-comission {
  font-weight: 500;
  font-size: 35px;
  margin-bottom: 0px;
}
</style>
