<template>
  <div class="container loginPage">
    <img alt="Vue logo" width="200px" src="../assets/logo.png" />

    <LoginForm class="loginForm" />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
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

.loginForm {
  width: 100%;
}
</style>
