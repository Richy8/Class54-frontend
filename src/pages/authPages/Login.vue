<template>
  <div class="auth-form">
    <div class="auth-text brand-dark-blue text-center font-weight-bold mgb-32">
      Log into your account
    </div>

    <!-- EMAIL BLOCK -->
    <form action="" @submit.prevent="processLoginData">
      <div class="email-block mgb-24">
        <label for="email" class="label-text">Email Address</label>
        <input
          type="email"
          v-model="form.email"
          class="form-control"
          id="email"
          placeholder="Email Address"
        />
      </div>

      <!-- PASSWORD BLOCK -->
      <div class="password-block mgb-16">
        <label for="password" class="label-text">Password</label>
        <div class="position-relative">
          <input
            :type="password_type ? 'password' : 'text'"
            v-model="form.password"
            class="form-control"
            id="password"
            placeholder="Password"
          />

          <div
            class="show-password-btn position-absolute light-dark-text smooth-transition pointer"
            @click="togglePasswordType"
          >
            {{ password_type ? "Show" : "Hide" }}
          </div>
        </div>
      </div>

      <!-- FORGOT PASSWORD LINK -->
      <router-link
        :to="{ name: 'Class54PasswordRequest' }"
        class="font-weight-600"
      >
        Forgot your Password?
      </router-link>

      <!-- SUBMIT BUTTON -->
      <button
        type="submit"
        class="btn btn-block btn-primary mgt-16"
        :disabled="isDisabled"
      >
        Log me in
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      form: {
        email: "",
        password: "",
      },

      password_type: true,
    };
  },

  computed: {
    isDisabled() {
      return this.form.email && this.form.password.length > 5 ? false : true;
    },
  },

  methods: {
    togglePasswordType() {
      this.password_type = !this.password_type;
    },

    processLoginData() {},
  },
};
</script>

<style>
</style>