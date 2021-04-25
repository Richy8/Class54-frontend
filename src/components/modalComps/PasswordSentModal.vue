<template>
  <Modal
    @closeModal="$emit('closeTriggered')"
    modal_style="modal-xs"
    :show_close="true"
  >
    <!-- MODAL BODY -->
    <template slot="modal-cover-body">
      <div class="password-sent-modal h-auto mgt-36">
        <div class="icon mgb-25">
          <mail-icon size="cfont-48" />
        </div>

        <!-- TITLE -->
        <div
          class="modal-title brand-dark-blue font-weight-700 mgb-12 text-center"
        >
          We’ve just sent you an Email
        </div>

        <!-- META TEXT -->
        <div class="meta-text dark-text text-center">
          The email contains instructions on how you will reset your forgotten
          password.
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
import MailIcon from "@/components/globalComps/colouredIcons/MailIcon";
import Modal from "@/components/modalComps/Modal";

export default {
  name: "PasswordSentModal",

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