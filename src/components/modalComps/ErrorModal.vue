<template>
  <Modal
    @closeModal="$emit('closeTriggered')"
    modal_style="modal-xs"
    :show_close="true"
  >
    <!-- MODAL BODY -->
    <template slot="modal-cover-body">
      <div class="password-sent-modal h-auto mgt-32">
        <div class="icon mgb-22">
          <div class="icon-error-alert brand-yellow cfont-48"></div>
        </div>

        <!-- TITLE -->
        <div
          class="modal-title brand-dark-blue font-weight-700 mgb-12 text-center"
        >
          You’re about to delete this year!
        </div>

        <!-- META TEXT -->
        <div class="meta-text dark-text text-center mgb-14">
          Deleting this year means that it will no longer be available.
        </div>

        <div class="button-row d-flex justify-content-between w-100">
            <button class="btn btn-md btn-outline pdx-40">Cancel</button>
            <button class="btn btn-md btn-red pdx-40">Delete</button>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
import MailIcon from "@/components/globalComps/colouredIcons/MailIcon";
import Modal from "@/components/modalComps/Modal";

export default {
  name: "ErrorModal",

  components: {
    MailIcon,
    Modal,
  },
};
</script>

<style lang="scss" scoped>
.password-sent-modal {
  @include flex-column-center;
  position: relative;
  background: $brand-white;
  padding: 32px 24px;

  .modal-title {
    @include font-height(16, 20);
    letter-spacing: 0.02em;
  }

  .meta-text {
    @include font-height(13, 22);
    letter-spacing: 0.02em;
  }
}
</style>
