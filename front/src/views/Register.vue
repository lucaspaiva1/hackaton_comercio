<template>
  <div class="container loginPage">
    <div class="logo">VSquad</div>

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

.logo {
  font-size: 50px;
  font-weight: 500;
  padding: 4.5rem 0px;
}
</style>
