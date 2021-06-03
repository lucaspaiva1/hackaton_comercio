<template>
  <div>
    <b-card title="Meus Produtos" tag="article" class="m-3">
      <b-table
        striped
        hover
        borderless
        :items="products"
        :fields="fields"
      ></b-table>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  props: ["products"],
  data() {
    return {
      fields: [
        { key: "name", label: "Name" },
        { key: "price", label: "Preço" },
        { key: "quantity", label: "Quantidade" },
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
