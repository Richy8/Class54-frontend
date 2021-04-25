<template>
  <div class="modal-overlay modal-cover-overlay">
    <div class="modal-cover rounded-8" :class="modal_style">
      <div class="modal-cover-body">
        <!-- DISMISS DIALOG -->
        <div
          v-if="show_close"
          class="dialog-dismiss position-absolute pointer index-9"
          @click="$emit('closeModal')"
        >
          <div class="wrapper position-relative w-100 h-100">
            <div class="icon icon-close brand-black cfont-23"></div>
          </div>
        </div>

        <!-- MODAL COVER BODY -->
        <slot name="modal-cover-body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalCover",

  props: {
    modal_style: String,
    show_close: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang='scss' scoped>
</style>
