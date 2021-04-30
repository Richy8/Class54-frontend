<template>
  <div class="create-years-page">
    <breadcrumb-bar item_two="Create Faculty" />

    <div class="full-width-page">
      <div class="form-container">
        <!--FACULTY FULLNAME -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Faculty Fullname</div>
            <div class="meta-text">
              E.g College of Engineering and Natural Sciences
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input
              type="text"
              class="form-control"
              placeholder="Faculty Fullname"
            />
          </div>
        </div>

        <!--FACULTY ABBR -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Faculty Abbreviation</div>
            <div class="meta-text">
              E.g CENS
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input
              type="text"
              class="form-control"
              placeholder="Faculty Abbreviation"
            />
          </div>
        </div>

        <!--FACULTY DESCRIPTION -->
        <div class="form-row row bottom-row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Faculty Description (Optional)</div>
            <div class="meta-text">A short text that describes the Faculty</div>
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
        <button class="btn btn-md btn-primary pdx-45" @click="createFaculty">
          Create Faculty
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbBar from "@/components/globalComps/BreadcrumbBar";

export default {
  name: "CreateFaculty",

  components: {
    BreadcrumbBar,
  },

  methods: {
    createFaculty() {
      this.$bus.$emit("show-success-modal");
    },
  },
};
</script>

<style></style>
