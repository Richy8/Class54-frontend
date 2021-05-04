<template>
  <Modal
    @closeModal="$emit('closeTriggered')"
    modal_style="modal-xs"
    :show_close="true"
  >
    <!-- MODAL BODY -->
    <template slot="modal-cover-body">
      <div class="password-sent-modal h-auto mgt-36">
        <div class="icon mgb-25 mgl--12">
          <success-icon size="cfont-48" />
        </div>

        <!-- TITLE -->
        <div
          class="modal-title brand-dark-blue font-weight-700 mgb-12 text-center text-capitalize"
        >
          {{ page_singular }} Created!
        </div>

        <!-- META TEXT -->
        <div class="meta-text dark-text text-center mgb-25">
          Click on ‘Got it’ to redirect to the see all the {{ page_plural }}
        </div>

        <div class="button-row d-flex justify-content-center w-100">
          <button
            @click="redirectToTargetPage"
            class="btn btn-md btn-primary pdx-40 mgl-2"
          >
            Got it
          </button>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modalComps/Modal";
import SuccessIcon from "@/components/globalComps/colouredIcons/SuccessIcon";

export default {
  name: "SuccessModal",

  components: {
    Modal,
    SuccessIcon,
  },

  mounted() {
    console.log(this.$route.path);
  },

  data() {
    return {
      page_singular: this.$route.path.split("/")[1],
      page_plural: this.$route.meta.title,
    };
  },

  methods: {
    redirectToTargetPage() {
      this.$emit("closeTriggered");
      this.$router.push(`/${this.page_singular}/all-${this.page_singular}`);
    },
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
    @include font-height(18, 20);
    letter-spacing: 0.02em;
  }

  .meta-text {
    @include font-height(13, 22);
    letter-spacing: 0.02em;
  }
}
</style>
