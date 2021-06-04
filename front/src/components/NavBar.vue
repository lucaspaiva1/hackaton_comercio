<template>
  <div class="nav">
    <div class="container">
      <div>
        VendX
      </div>
      <div v-if="!customer">
        <span class="logout" @click="logout">Sair</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  props: ["customer"],
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa !important;
  .container {
    display: flex;
    justify-content: space-between;
  }

  .logout {
    cursor: pointer;
  }
}
</style>
