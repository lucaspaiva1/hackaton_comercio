<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class="container">
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
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AffiliateProductInfo from "@/components/AffiliateProductInfo.vue";
import ProductInfo from "@/components/ProductInfo.vue";

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
  components: {
    NavBar,
    AffiliateProductInfo,
    ProductInfo,
  },
  data() {
    return {
      product,
    };
  },
};
</script>
