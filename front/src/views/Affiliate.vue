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
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AffiliateProducts from "@/components/AffiliateProducts.vue";
import AffiliateAvailableProductsList from "@/components/AffiliateAvailableProductsList.vue";
import API from "@/api";
const products = [
  {
    name: "Capa iphone 8",
    price: 10.9,
    comission: 1.0,
    quantity: 10,
    observations: "",
  },
  {
    name: "Capa iphone 8 plus",
    price: 10.9,
    comission: 1.0,
    observations: "",
    quantity: 5,
  },
];

export default {
  name: "Supplier",
  components: {
    NavBar,
    AffiliateProducts,
    AffiliateAvailableProductsList,
  },
  data() {
    return {
      products,
      availableProducts: [],
      loading: false,
      affiliate: null,
    };
  },
  mounted() {
    this.affiliate = JSON.parse(localStorage.getItem("current_user"));
    this.loadAvailableProducts();
  },
  methods: {
    async loadAvailableProducts() {
      this.loading = true;
      const response = await API.productsAvailable(this.affiliate.user.id);
      this.availableProducts = response.data;
      console.log(response.data);
      this.loading = true;
    },
  },
};
</script>
