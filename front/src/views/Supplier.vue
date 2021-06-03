<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class="container">
      <b-row>
        <b-col sm="6">
          <SupplierProductForm />
        </b-col>
        <b-col sm="6">
          <SupplierProducts :products="products" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SupplierProducts from "@/components/SupplierProducts.vue";
import SupplierProductForm from "@/components/SupplierProductForm.vue";

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
    SupplierProducts,
    SupplierProductForm,
  },
  data() {
    return {
      products,
    };
  },
};
</script>
