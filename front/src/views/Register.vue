<template>
  <div class="container loginPage">
    <img alt="Vue logo" width="200px" src="../assets/logo.png" />

    <RegisterForm class="registerForm" />
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  name: "Login",
  components: {
    RegisterForm,
  },
};
</script>

<style lang="scss" scoped>
.loginPage {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.registerForm {
  width: 100%;
}
</style>
