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
          <SupplierProducts :loading="loadingProducts" :products="products" />
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12">
          <SupplierOrders :loading="loadingOrders" :orders="orders" />
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
import SupplierOrders from "@/components/SupplierOrders.vue";

export default {
  name: "Supplier",
  components: {
    NavBar,
    SupplierProducts,
    SupplierProductForm,
    SupplierOrders,
  },
  data() {
    return {
      products: [],
      orders: [],
      loadingProducts: false,
      loadingOrders: false,
      supplier: null,
    };
  },
  mounted() {
    this.supplier = JSON.parse(localStorage.getItem("current_user"));
    this.loadProducts();
    this.loadOrders();
  },
  methods: {
    async loadProducts() {
      this.loadingProducts = true;
      const response = await API.productsBySupplier(this.supplier.user.id);
      this.products = response.data;
      this.loadingProducts = false;
    },
    async loadOrders() {
      this.loadingOrders = true;
      const response = await API.supplierOrders(this.supplier.user.id);
      this.orders = response.data;
      this.loadingOrders = false;
    },
    onCreateProduct() {
      this.loadProducts();
    },
  },
};
</script>
