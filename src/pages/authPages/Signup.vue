<template>
  <div class="auth-form">
    <div class="auth-text brand-dark-blue text-center font-weight-bold mgb-32">
      Complete your admin user account creation
    </div>

    <!-- EMAIL BLOCK -->
    <form action="" @submit.prevent="processSignupData">
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
      <div
        class="password-block mgb-24"
        :class="show_error ? 'error-input' : null"
      >
        <label for="password" class="label-text">Create New Password</label>
        <div class="position-relative">
          <input
            :type="password_type ? 'password' : 'text'"
            v-model="form.password"
            class="form-control"
            id="password"
            placeholder="Password"
            @input="watchPasswordField"
          />

          <div
            class="show-password-btn position-absolute light-dark-text smooth-transition pointer"
            @click="togglePasswordType"
          >
            {{ password_type ? "Show" : "Hide" }}
          </div>
        </div>

        <!-- ERROR INPUT TEXT -->
        <div
          class="error-input-msg mgt-5 font-weight-600 brand-red"
          v-if="show_error"
        >
          Password must be a minimum of 6 characters
        </div>
      </div>

      <!-- SUBMIT BUTTON -->
      <button
        type="submit"
        class="btn btn-block btn-primary mgb-24"
        :disabled="isDisabled"
      >
        Complete Registration
      </button>

      <!-- HELPER TEXT -->
      <div class="helper-text text-center brand-black">
        Already have an Admin account?
        <router-link :to="{ name: 'Class54Login' }">Login here</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup",

  data() {
    return {
      form: {
        email: "",
        password: "",
      },

      password_type: true,
      show_error: false,
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

    processSignupData() {},

    watchPasswordField() {
      this.show_error = this.form.password.length < 6 ? true : false;
    },
  },
};
</script>

<style>
</style>