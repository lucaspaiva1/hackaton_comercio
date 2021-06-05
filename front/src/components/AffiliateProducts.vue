<template>
  <div>
    <b-card title="Meus Produtos" class="m-3">
      <b-table
        striped
        hover
        borderless
        responsive
        :items="products"
        :fields="fields"
      >
        <template #cell(price)="data">
          R$ {{ parseFloat(data.item.price).toFixed(2) }}
        </template>
        <template #cell(comission)="data">
          R$ {{ parseFloat(data.item.comission).toFixed(2) }}
        </template>
        <template #cell(action)="data">
          <b-button
            v-clipboard="getUrlLink(data.item.id)"
            v-clipboard:success="clipboardSuccessHandler"
            variant="outline-secondary"
            size="sm"
          >
            Copiar Link
          </b-button>
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "AffiliateProducts",
  props: ["products"],
  data() {
    return {
      fields: [
        { key: "name", label: "Name" },
        { key: "quantity", label: "Estoque" },
        { key: "price", label: "Preço" },
        { key: "comission", label: "Comissão" },
        { key: "action" },
      ],
      affiliate: null,
    };
  },
  mounted() {
    this.affiliate = JSON.parse(localStorage.getItem("current_user"));
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }

        alert("Form submitted!");
      });
    },
    getUrlLink(product_id) {
      return `${window.location.host}/affiliate/${this.affiliate.user.id}/product/${product_id}`;
    },
    clipboardSuccessHandler(e) {
      e.event.srcElement.innerText = "Copiado!";
      setTimeout(() => {
        e.event.srcElement.innerText = "Copiar Link";
      }, 1000);
    },
  },
};
</script>
