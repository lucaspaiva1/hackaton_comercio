<template>
  <div>
    <b-card title="Produtos disponíveis" class="m-3">
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
        :items="items"
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
        hover
        responsive
        @row-clicked="openProduct"
        @filtered="onFiltered"
      >
        <template #cell(quantity)="data">
          R$ {{ parseFloat(data.item.quantity).toFixed(2) }}
        </template>
        <template #cell(price)="data">
          R$ {{ parseFloat(data.item.price).toFixed(2) }}
        </template>
        <template #cell(comission)="data">
          R$ {{ parseFloat(data.item.comission).toFixed(2) }}
        </template>
      </b-table>

      <b-col class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "AffiliateAvailableProductsList",
  props: ["products"],
  data() {
    return {
      items: [],
      fields: [
        {
          key: "name",
          label: "Nome",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "quantity",
          label: "Estoque",
          sortable: true,
        },
        {
          key: "price",
          label: "Preço",
          sortable: true,
        },
        {
          key: "comission",
          label: "Comissão",
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
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
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
    this.totalRows = this.items.length;
    this.items = [...this.products];
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    openProduct(item) {
      this.$router.push({ path: `/affiliate/product/${item.id}` });
    },
  },
  watch: {
    products(value) {
      this.items = value.map((product) => ({
        name: product.name,
        price: product.price,
        comission: product.comission,
        quantity: product.quantity,
      }));
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
  tr {
    cursor: pointer;
  }
}
</style>
