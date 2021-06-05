<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class="container">
      <b-row>
        <b-col sm="6">
          <AffiliateAvailableProductsList :products="availableProducts" />
        </b-col>
        <b-col sm="6">
          <AffiliateProducts :products="products" />
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12">
          <AffiliateOrders :loading="loadingOrders" :orders="orders" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AffiliateProducts from "@/components/AffiliateProducts.vue";
import AffiliateAvailableProductsList from "@/components/AffiliateAvailableProductsList.vue";
import API from "@/api";
import AffiliateOrders from "@/components/AffiliateOrders.vue";

export default {
  name: "Supplier",
  components: {
    NavBar,
    AffiliateProducts,
    AffiliateAvailableProductsList,
    AffiliateOrders,
  },
  data() {
    return {
      products: [],
      availableProducts: [],
      loading: false,
      loadingProducts: false,
      affiliate: null,
    };
  },
  mounted() {
    this.affiliate = JSON.parse(localStorage.getItem("current_user"));
    this.loadAvailableProducts();
    this.loadProducts();
    this.loadOrders(this.affiliate.user.id);
  },
  methods: {
    async loadAvailableProducts() {
      this.loading = true;
      const response = await API.productsAvailable(this.affiliate.user.id);
      this.availableProducts = response.data;
      this.loading = true;
    },
    async loadProducts() {
      this.loadingProducts = true;
      const response = await API.getProductAffiliate(this.affiliate.user.id);
      this.products = response.data;
      this.loadingProducts = true;
    },
    async loadOrders(affiliate_id) {
      this.loadingOrders = true;
      const response = await API.affiliateOrders(affiliate_id);
      this.orders = response.data;
      this.loadingOrders = false;
    },
  },
};
</script>
