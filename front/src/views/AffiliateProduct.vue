<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div v-if="error" class="error-container">
      <div class="mt-3">
        Produto não encontrado.
      </div>
    </div>
    <div v-else-if="!loading && product">
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
      product: null,
      loading: false,
      loadingOrders: false,
      error: false,
    };
  },
  mounted() {
    this.loadProduct(this.product_id);
  },
  methods: {
    async loadProduct(product_id) {
      this.loading = true;
      try {
        const response = await API.product(product_id);
        if (!response.data) {
          this.error = true;
        }
        this.product = { ...response.data };
      } catch (err) {
        this.error = true;
      }
      this.loading = false;
    },
    back() {
      this.$router.push({ path: "/affiliate" });
    },
  },
};
</script>

<style>
.error-container,
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
}
</style>
