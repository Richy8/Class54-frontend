<template>
  <div
    class="toast-alert mgt-16 mgb-30 rounded-4"
    :class="alert_type === 'success' ? 'toast-green-bg' : 'toast-brown-bg'"
  >
    <!-- ICON  -->
    <div
      class="icon mgr-10 icon-empty brand-dark-green"
      v-if="alert_type === 'success'"
    ></div>

    <div class="icon mgr-10 icon-alert toast-deep-brown" v-else></div>

    <!-- TEXT  -->
    <div
      class="text text-left"
      :class="
        alert_type === 'success' ? 'brand-dark-green' : 'toast-deep-brown'
      "
    >
      {{ alert_message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ToastAlert",

  props: {
    alert_type: {
      type: String,
      default: "Success",
    },

    alert_message: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.toast-alert {
  padding: 16px 24px;
  @include flex-row-start-nowrap;

  .icon {
    font-size: 22px;
  }

  .text {
    @include font-height(14, 19);
  }
}
</style>
