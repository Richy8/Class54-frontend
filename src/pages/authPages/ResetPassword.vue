<template>
  <div class="auth-form">
    <div class="auth-text brand-dark-blue text-center font-weight-bold mgb-32">
      Reset password, to access your account.
    </div>

    <!-- EMAIL BLOCK -->
    <form action="" @submit.prevent="processResetData">
      <!-- PASSWORD BLOCK -->
      <div class="password-block mgb-16">
        <label for="password" class="label-text">Password</label>
        <input
          type="password"
          v-model="form.password"
          class="form-control"
          id="password"
          placeholder="Password"
        />
      </div>

      <!-- PASSWORD BLOCK -->
      <div
        class="password-block mgb-24"
        :class="show_error ? 'error-input' : null"
      >
        <label for="confirm_password" class="label-text"
          >Confirm Password</label
        >
        <input
          type="password"
          v-model="form.confirm_password"
          class="form-control"
          id="confirm_password"
          placeholder="Confirm Password"
          @input="watchPasswordField"
        />

        <!-- ERROR INPUT TEXT -->
        <div
          class="error-input-msg mgt-5 font-weight-600 brand-red"
          v-if="show_error"
        >
          Password does not match!
        </div>
      </div>

      <!-- SUBMIT BUTTON -->
      <button
        type="submit"
        class="btn btn-block btn-primary mgt-16"
        :disabled="isDisabled"
      >
        Reset
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ResetPassword",

  data() {
    return {
      form: {
        password: "",
        confirm_password: "",
      },

      show_error: false,
      password_type: true,
    };
  },

  computed: {
    isDisabled() {
      return this.form.password.length > 5 &&
        this.form.confirm_password.length > 5 &&
        this.form.password === this.form.confirm_password
        ? false
        : true;
    },
  },

  methods: {
    processResetData() {},

    watchPasswordField() {
      this.show_error =
        this.form.password !== this.form.confirm_password ? true : false;
    },
  },
};
</script>

<style>
</style>