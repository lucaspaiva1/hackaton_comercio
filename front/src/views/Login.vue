<template>
  <div class="container loginPage">
    <div class="logo">VSquad</div>

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

.logo {
  font-size: 50px;
  font-weight: 500;
  padding: 4.5rem 0px;
}
</style>
