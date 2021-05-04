<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- RESPONSE DIALOG -->
    <response-dialog
      v-if="show_response"
      @closeTriggered="closeResponseDialog"
    />

    <!-- MODAL -->
    <transition name="fade">
      <success-modal v-if="show_success" @closeTriggered="toggleSuccessModal" />
      <error-modal v-if="show_error" @closeTriggered="toggleErrorModal" />
    </transition>
  </div>
</template>

<script>
import ResponseDialog from "@/components/globalComps/ResponseDialog";
import SuccessModal from "@/components/modalComps/SuccessModal";
import ErrorModal from "@/components/modalComps/ErrorModal";

export default {
  name: "App",

  components: {
    ResponseDialog,
    SuccessModal,
    ErrorModal,
  },

  data() {
    return {
      show_response: true,
      show_success: false,
      show_error: false,
    };
  },

  created() {
    this.$bus.$on("show-response-dialog", () => this.closeResponseDialog());

    this.$bus.$on("show-success-modal", () => this.toggleSuccessModal());
    this.$bus.$on("show-error-modal", () => this.toggleErrorModal());
  },

  mounted() {
    this.show_success = false;
    this.show_error = false;
  },

  methods: {
    closeResponseDialog() {
      this.show_response = !this.show_response;
    },

    toggleSuccessModal() {
      this.show_success = !this.show_success;
    },

    toggleErrorModal() {
      this.show_error = !this.show_error;
    },
  },
};
</script>

<style lang="scss">
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.2s ease-in;
}
.fade-leave-active {
  transition: opacity 0.2s ease-out;
  opacity: 0;
}
</style>
