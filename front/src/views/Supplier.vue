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
      orders: [
        {
          product: {
            name: "Iphone 6s",
            price: 1600.0,
            comission: 100.0,
          },
          status: "pending",
          created_at: "2021-01-01 10:00:00",
        },
        {
          product: {
            name: "Iphone 8",
            price: 2400.0,
            comission: 100.0,
          },
          status: "done",
          created_at: "2021-01-01 10:00:00",
        },
      ],
      loadingProducts: false,
      loadingOrders: false,
    };
  },
  mounted() {
    this.loadProducts();
    this.loadOrders();
  },
  methods: {
    async loadProducts() {
      const supplier = JSON.parse(localStorage.getItem("current_user"));
      this.loadingProducts = true;
      const response = await API.productsBySupplier(supplier.user.id);
      this.products = response.data;
      this.loadingProducts = false;
    },
    async loadOrders() {
      // const supplier = JSON.parse(localStorage.getItem("current_user"));
      this.loadingOrders = true;
      // const response = await API.ordersBySupplier(supplier.user.id);
      // this.orders = response.data;
      this.loadingOrders = false;
    },
    onCreateProduct() {
      this.loadProducts();
    },
  },
};
</script>
