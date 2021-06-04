<template>
  <div>
    <b-card title="Meus Produtos" class="m-3">
      <b-table
        :busy="loading"
        striped
        hover
        borderless
        :items="products"
        :fields="fields"
      >
        <template #cell(price)="data">
          R$ {{ parseFloat(data.item.price).toFixed(2) }}
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "SupplierProducts",
  props: ["products", "loading"],
  data() {
    return {
      fields: [
        { key: "name", label: "Name" },
        { key: "price", label: "Preço" },
        { key: "quantity", label: "Estoque" },
      ],
    };
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
  },
};
</script>
