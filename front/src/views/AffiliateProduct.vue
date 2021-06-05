<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div v-if="!loading">
      <div class="container">
        <div>
          <b-button variant="link" @click="back">Voltar</b-button>
        </div>
        <b-row>
          <b-col sm="8">
            <ProductInfo :product="product" />
          </b-col>
          <b-col sm="4">
            <AffiliateProductInfo :product="product" />
          </b-col>
        </b-row>
      </div>
    </div>
    <div v-else>
      <div class="loading-container">
        <b-spinner style="width: 3rem; height: 3rem;"></b-spinner>
        <div class="mt-3">
          Carregando...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AffiliateProductInfo from "@/components/AffiliateProductInfo.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import API from "@/api";

const product = {
  name: "Capa iphone 8",
  price: 10.9,
  comission: 1.0,
  quantity: 10,
  description:
    "Capa de couro para iPhone 8 de cor preta, ótimo acabamento e perfeito apara você que gosta de um design arroado.",
  image_1:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQHM2_AV1_GOLD_GEO_BR?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1547676786164",
  image_2:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQHM2_AV1_SPACE_GRAY_GEO_BR?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1547676966944",
  image_3:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQHM2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1516659531508",
};

export default {
  name: "AffiliateProduct",
  props: ["product_id"],
  components: {
    NavBar,
    AffiliateProductInfo,
    ProductInfo,
  },
  data() {
    return {
      product,
      loading: false,
    };
  },
  mounted() {
    this.loadProduct(this.product_id);
  },
  methods: {
    async loadProduct(product_id) {
      this.loading = true;
      const response = await API.product(product_id);
      this.product = { ...response.data };
      this.loading = false;
    },
    back() {
      this.$router.push({ path: "/affiliate" });
    },
  },
};
</script>

<style>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
}
</style>
