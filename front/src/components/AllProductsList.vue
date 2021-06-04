<template>
  <div>
    <b-card title="Produtos disponíveis" tag="article" class="m-3">
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
        responsive
        @filtered="onFiltered"
      >
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
  name: "AllProductsList",
  data() {
    return {
      items: [
        {
          name: "Dickerson",
          quantity: 40,
          price: 40,
          comission: 40,
        },
        {
          name: "Larsen",
          quantity: 21,
          price: 21,
          comission: 21,
        },
        {
          name: "Mini",
          quantity: 9,
          price: 9,
          comission: 9,
        },
        {
          name: "Geneva",
          quantity: 89,
          price: 89,
          comission: 89,
        },
        {
          name: "Jami",
          quantity: 38,
          price: 38,
          comission: 38,
        },
        {
          name: "Essie",
          quantity: 27,
          price: 27,
          comission: 27,
        },
        {
          name: "Thor",
          quantity: 40,
          price: 40,
          comission: 40,
        },
        {
          name: "Larsen",
          quantity: 87,
          price: 87,
          comission: 87,
        },
        {
          name: "Mitzi",
          quantity: 26,
          price: 26,
          comission: 26,
        },
        {
          name: "Genevieve",
          quantity: 22,
          price: 22,
          comission: 22,
        },
        {
          name: "John",
          quantity: 38,
          price: 38,
          comission: 38,
        },
        {
          name: "Dick",
          quantity: 29,
          price: 29,
          comission: 29,
        },
      ],
      fields: [
        {
          key: "name",
          label: "Nome",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "quantity",
          label: "Quantidade",
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
</style>
