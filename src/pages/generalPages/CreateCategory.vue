<template>
  <div class="create-years-page">
    <breadcrumb-bar item_two="Create Category" />

    <div class="full-width-page">
      <div class="form-container">
        <!--CATEGORY FULLNAME -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Category Name</div>
            <div class="meta-text">
              E.g. Junior Secondary School
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input
              type="text"
              class="form-control"
              placeholder="Category Name"
            />
          </div>
        </div>

        <!--CATEGORY ABBR -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Category Abbreviation</div>
            <div class="meta-text">
              E.g JSS
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input
              type="text"
              class="form-control"
              placeholder="Category Abbreviation"
            />
          </div>
        </div>

        <!--CATEGORY DESCRIPTION -->
        <div class="form-row row bottom-row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Category Description (Optional)</div>
            <div class="meta-text">
              A short text that describes the Category
            </div>
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
        <button class="btn btn-md btn-primary pdx-45" @click="createCategory">
          Create Category
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbBar from "@/components/globalComps/BreadcrumbBar";

export default {
  name: "CreateCategory",

  components: {
    BreadcrumbBar,
  },

  methods: {
    createCategory() {
      this.$bus.$emit("show-success-modal");
    },
  },
};
</script>

<style></style>
