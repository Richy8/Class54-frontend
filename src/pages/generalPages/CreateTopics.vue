<template>
  <div class="create-years-page">
    <breadcrumb-bar item_two="Create Topic" />

    <div class="full-width-page">
      <div class="form-container">
        <!--YEAR NAME -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Topic Name</div>
            <div class="meta-text">
              E.g Factors affecting the distribution of Organisms
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input type="text" class="form-control" placeholder="Topic" />
          </div>
        </div>

        <!--YEAR DESCRIPTION -->
        <div class="form-row row bottom-row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Topic Description (Optional)</div>
            <div class="meta-text">A short text that describes the Topic</div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <textarea
              class="form-control"
              rows="6"
              placeholder="Description"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- BUTTON ROW -->
      <div class="button-row d-flex justify-content-end">
        <button class="btn btn-md btn-primary pdx-45" @click="createTopic">
          Create Topic
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbBar from "@/components/globalComps/BreadcrumbBar";

export default {
  name: "CreateTopics",

  components: {
    BreadcrumbBar,
  },

  methods: {
    createTopic() {
      this.$bus.$emit("show-success-modal");
    },
  },
};
</script>

<style></style>
