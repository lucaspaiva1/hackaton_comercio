<template>
  <div>
    <b-card title="" class="m-3">
      <div class="image-container">
        <div class="image-selector-container">
          <div class="image-item" @click="showImage(product.image_1)">
            <img :src="product.image_1" alt="" />
          </div>
          <div class="image-item" @click="showImage(product.image_2)">
            <img :src="product.image_2" alt="" />
          </div>

          <div class="image-item" @click="showImage(product.image_3)">
            <img :src="product.image_3" alt="" />
          </div>
        </div>
        <div class="main-image-container">
          <div class="image-item">
            <img :src="currentImage" alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h3>
          Informações do Produto
        </h3>
        <p>{{ product.description }}</p>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  props: ["product"],
  data() {
    return {
      currentImage: null,
    };
  },
  mounted() {
    this.currentImage = this.product.image_1;
  },
  methods: {
    showImage(image) {
      this.currentImage = image;
    },
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  display: flex;
  .image-selector-container {
    max-width: 60px;
    display: flex;
    flex-direction: column;
    .image-item {
      width: 50px;
      height: 50px;
      cursor: pointer;
      border-radius: 6px;
      border: 1px solid #c4c4c4;
      margin: 5px 0;
      &:hover {
        opacity: 0.8;
      }
      img {
        border-radius: 6px;
      }
    }
  }
  .main-image-container {
    display: flex;
    justify-content: center;
    width: 100%;
    .image-item {
      width: 450px;
      height: 450px;
    }
  }
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}
</style>
