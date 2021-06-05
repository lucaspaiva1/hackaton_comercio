<template>
  <div>
    <b-card title="Meus Pedidos" class="m-3">
      <b-row>
        <b-col lg="6" class="my-1">
          <b-form-group
            label="Buscar"
            label-for="filter-input"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
          >
            <b-input-group size="sm">
              <b-form-input
                id="filter-input"
                v-model="filter"
                type="search"
                placeholder="Buscar produto"
              ></b-form-input>

              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">
                  Limpar
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>

      <b-table
        :items="orders"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :filter-included-fields="filterOn"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        show-empty
        small
        responsive
        @row-clicked="openProduct"
        @filtered="onFiltered"
      >
        <template #cell(name)="data">
          {{ data.item.product.name }}
        </template>
        <template #cell(price)="data">
          R$ {{ parseFloat(data.item.product.price).toFixed(2) }}
        </template>
        <template #cell(comission)="data">
          R$ {{ parseFloat(data.item.product.comission).toFixed(2) }}
        </template>
        <template #cell(status)="data">
          {{ translateStatus(data.item.status) }}
        </template>
      </b-table>

      <b-col class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0 pagination"
        ></b-pagination>
      </b-col>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "AllProductsList",
  props: ["orders"],
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "Nome",
        },
        {
          key: "price",
          label: "Preço",
        },
        {
          key: "comission",
          label: "Comissão",
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 20,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
    };
  },
  computed: {
    sortOptions() {
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    this.totalRows = this.orders.length;
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    openProduct(item) {
      this.$router.push({ path: `/affiliate/product/${item.id}` });
    },
    translateStatus(status) {
      switch (status) {
        case "pending":
          return "Pendente";

        case "done":
          return "Entregue";
      }
      return status;
    },
  },
};
</script>

<style lang="scss">
table {
  th {
    .sr-only {
      display: none !important;
    }
  }
}
.pagination {
  max-width: 400px;
}
</style>
