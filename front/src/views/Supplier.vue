<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class="container">
      <b-row>
        <b-col sm="6">
          <SupplierProductForm @created="onCreateProduct" />
        </b-col>
        <b-col sm="6">
          <SupplierProducts :loading="loading" :products="products" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import API from "@/api";
import NavBar from "@/components/NavBar.vue";
import SupplierProducts from "@/components/SupplierProducts.vue";
import SupplierProductForm from "@/components/SupplierProductForm.vue";

export default {
  name: "Supplier",
  components: {
    NavBar,
    SupplierProducts,
    SupplierProductForm,
  },
  data() {
    return {
      products: [],
      loading: false,
    };
  },
  mounted() {
    this.loadProducts();
  },
  methods: {
    async loadProducts() {
      const supplier = JSON.parse(localStorage.getItem("current_user"));
      this.loading = true;
      const response = await API.productsBySupplier(supplier.user.id);
      this.products = response.data;
      this.loading = false;
    },
    onCreateProduct() {
      this.loadProducts();
    },
  },
};
</script>
