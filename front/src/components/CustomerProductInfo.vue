<template>
  <div>
    <b-card title="" class="m-3">
      <div>
        <h3>
          {{ product.name }}
        </h3>
      </div>
      <div class="mt-3">
        <h4 class="product-price">
          R$ {{ parseFloat(product.price).toFixed(2) }}
        </h4>
      </div>
      <div class="mt-4">
        <small>
          Quantidade disponível:
          <b>{{ product.quantity }} {{ quantityLabel }}</b>
        </small>
      </div>
      <div>
        <h6 class="mb-0 mt-4">Opções de envio</h6>
        <b-table
          id="delivery_methods"
          striped
          :fields="fields"
          :items="deliveryTypes"
          borderless
        ></b-table>
      </div>
      <hr class="my-4" />
      <b-form-group class="mb-3" label="Quantidade">
        <b-form-input
          id="quantity"
          type="number"
          name="quantity"
          :max="product.quantity"
          v-model="form.quantity"
          required
        ></b-form-input>
      </b-form-group>
      <div class="w-100">
        <b-button
          class="w-100"
          block
          size="lg"
          variant="success"
          v-b-modal.voucher
          @click="validateQuantity"
        >
          <b-spinner v-if="loading" small />
          Comprar agora
        </b-button>

        <b-modal id="voucher" title="Imprimir Voucher" @ok="generateVoucher">
          <div id="printable" class="voucher">
            <img src="@/assets/qrcode.png" alt="" width="200" />
            <div>
              <div>
                <label class="text-muted"><b>Vendedor</b></label>
                <p>{{ affiliate.name }}</p>
              </div>
              <div>
                <label class="text-muted"><b>Produto</b></label>
                <p>{{ product.name }}</p>
              </div>
              <div>
                <label class="text-muted"><b>Quantidade</b></label>
                <p>{{ form.quantity }}</p>
              </div>
              <div>
                <label class="text-muted"><b>Subtotal</b></label>
                <p>
                  R$
                  {{ parseFloat(form.quantity * product.price).toFixed(2) }}
                </p>
              </div>
            </div>
          </div>
        </b-modal>
      </div>
    </b-card>

    <b-card class="m-3">
      <h6 class="supplier-header">
        Informações sobre a loja
      </h6>
      <div>
        <h3>
          {{ product.supplier.name }}
        </h3>
      </div>
      <div class="mt-3">
        <p class="address text-secondary">
          {{ product.supplier.address }}, nº {{ product.supplier.number }},
          {{ product.supplier.district }}.
          <br />
          {{ product.supplier.city }}
          <br />
          <br />
          {{ product.supplier.phone }}
        </p>
      </div>
    </b-card>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import canvas2image from "canvas2image-2";
import API from "@/api";

export default {
  name: "CustomerProductInfo",
  props: ["product", "affiliate"],
  data() {
    return {
      currentImage: null,
      loading: false,
      form: {
        quantity: 1,
      },
      fields: [
        {
          key: "type",
          label: "",
        },
        {
          key: "price",
          label: "",
        },
      ],
    };
  },
  computed: {
    quantityLabel() {
      return this.product.quantity > 1 ? "unidades" : "unidade";
    },
    deliveryTypes() {
      const methods = [
        {
          type: "Retirada no local",
          price: "Grátis",
        },
      ];
      if (this.product.delivery) {
        methods.push({
          type: "Entrega",
          price: `R$ ${parseFloat(this.product.delivery_price).toFixed(2)}`,
        });
      }
      return methods;
    },
  },
  methods: {
    showImage(image) {
      this.currentImage = image;
    },
    async submit() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push("/affiliate");
      }, 200);
    },
    validateQuantity() {
      if (this.form.quantity < 0) {
        this.form.quantity = 1;
      }
      if (this.form.quantity > this.product.quantity) {
        this.form.quantity = this.product.quantity;
      }
    },
    async generateVoucher() {
      const element = document.getElementById("printable");
      html2canvas(element, {
        useCORS: true,
      }).then((canvas) => {
        canvas2image.saveAsPNG(canvas, canvas.width, canvas.height);
      });
      await API.createOrder({
        quantity: this.form.quantity,
        affiliateId: this.affiliate.id,
        productId: this.product.id,
        supplierId: this.product.supplier.id,
      });
    },
  },
};
</script>

<style lang="scss">
h4.product-price {
  font-weight: 200 !important;
  font-size: 35px;
  font-weight: 500;
}
.supplier-header {
  font-weight: 300;
  font-size: 16px;
}
.address {
  font-size: 15px;
}
#delivery_methods {
  td {
    color: #444444 !important;
    font-size: 16px;
  }
}
</style>

<style lang="scss" scoped>
.voucher {
  display: flex;
  img {
    margin-right: 15px;
  }
}
</style>
