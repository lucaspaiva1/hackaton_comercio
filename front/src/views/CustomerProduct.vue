<template>
  <div class="customer-product-container">
    <div>
      <NavBar :customer="true" />
    </div>
    <div v-if="error" class="error-container">
      <div class="mt-3">
        Produto não encontrado.
      </div>
    </div>
    <div class="container" v-else-if="!loading && product && affiliate">
      <b-row>
        <b-col sm="8">
          <ProductInfo :product="product" />
        </b-col>
        <b-col sm="4">
          <CustomerProductInfo :product="product" :affiliate="affiliate" />
        </b-col>
      </b-row>
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
import CustomerProductInfo from "@/components/CustomerProductInfo.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import API from "@/api";

export default {
  name: "CustomerProduct",
  props: ["affiliate_id", "product_id"],
  components: {
    NavBar,
    CustomerProductInfo,
    ProductInfo,
  },
  data() {
    return {
      product: null,
      loading: false,
      error: false,
      affiliate: null,
    };
  },
  mounted() {
    this.loadProduct(this.product_id);
    this.loadAffiliate(this.affiliate_id);
  },
  methods: {
    async loadAffiliate(affiliate_id) {
      try {
        const response = await API.affiliate(affiliate_id);
        if (!response.data) {
          this.error = true;
        }
        this.affiliate = { ...response.data };
      } catch (err) {
        this.error = true;
      }
    },
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
