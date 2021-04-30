<template>
  <div
    class="response-dialog-section rounded-5 brand-red-light-bg overflow-hidden"
  >
    <div class="content">
      <div class="left brand-red-bg">
        <div class="icon-info brand-white cfont-17"></div>
      </div>
      <div class="right deep-red">
        <div>
          <span class="font-weight-bold">
            Year not created:
          </span>
          Kindly check and try again.
        </div>

        <div class="icon icon-close deep-red cfont-17 pointer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResponseDialog",

  mounted() {
    this.closeDialog();
  },

  methods: {
    closeDialog() {
      setTimeout(() => this.$emit("closeTriggered"), 5000);
    },
  },
};
</script>

<style lang="scss" scoped>
.response-dialog-section {
  position: fixed;
  top: 80px;
  z-index: 99;
  right: 10px;
  min-width: auto;
  max-width: 37%;
  width: auto;
  @include transition(0.8s);
  animation: panel-slide-right 0.8s ease-in-out forwards;
  filter: drop-shadow(2px 3px 3px rgba(0, 54, 27, 0.1));

  @include breakpoint-down(lg) {
    max-width: 50%;
    width: auto;
    top: 70px;
  }

  @include breakpoint-down(md) {
    max-width: 60%;
    top: 65px;
  }

  @include breakpoint-down(sm) {
    max-width: 70%;
    top: 60px;
  }

  @include breakpoint-down(xs) {
    max-width: 90%;
  }

  .content {
    position: relative;
    @include flex-row-start-nowrap;
  }

  .left {
    width: 36px;
    height: 100%;
    padding: 19.5px 8px;
    border-radius: 5px 0px 0px 5px;
    @include flex-row-center-nowrap;

    @include breakpoint-down(sm) {
      padding: 17px 9px;
    }
  }

  .right {
    height: 100%;
    padding: 18px 16px;
    @include font-height(13.5, 18);
    @include flex-row-between-nowrap;

    @include breakpoint-down(sm) {
      padding: 15.5px 16px;
    }

    .icon {
      margin-left: 30px;

      @include breakpoint-down(md) {
        margin-left: 26px;
      }
    }
  }
}
</style>
