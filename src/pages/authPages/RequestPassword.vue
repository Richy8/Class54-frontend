<template>
  <div class="auth-form">
    <div class="auth-text brand-dark-blue text-center font-weight-bold mgb-32">
      Reset your forgotten password
    </div>

    <!-- EMAIL BLOCK -->
    <form action="" @submit.prevent="processRequestPasswordData">
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

      <!-- SUBMIT BUTTON -->
      <button
        type="submit"
        class="btn btn-block btn-primary mgb-24"
        :disabled="isDisabled"
      >
        Reset Password
      </button>

      <!-- HELPER TEXT -->
      <div class="helper-text text-center brand-black">
        Remember your password now?
        <router-link :to="{ name: 'Class54Login' }">Login here</router-link>
      </div>
    </form>

    <!-- MODAL -->
    <password-sent-modal
      v-if="show_success_modal"
      @closeTriggered="toggleSuccessModal"
    />
  </div>
</template>

<script>
import PasswordSentModal from "@/components/modalComps/PasswordSentModal";

export default {
  name: "RequestPassword",

  components: {
    PasswordSentModal,
  },

  data() {
    return {
      form: {
        email: "",
      },

      show_success_modal: false,
    };
  },

  computed: {
    isDisabled() {
      return this.form.email ? false : true;
    },
  },

  methods: {
    toggleSuccessModal() {
      this.show_success_modal = !this.show_success_modal;
    },

    processRequestPasswordData() {
      setTimeout(() => this.toggleSuccessModal(), 1000);
    },
  },
};
</script>

<style></style>
