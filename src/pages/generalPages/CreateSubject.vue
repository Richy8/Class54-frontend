<template>
  <div class="create-years-page">
    <breadcrumb-bar item_two="Create Subject" />

    <div class="full-width-page">
      <div class="form-container">
        <!--SUBJECT NAME -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Subject Name</div>
            <div class="meta-text">
              E.g. Use of English
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input type="text" class="form-control" placeholder="Subject" />
          </div>
        </div>

        <!--SUBJECT DESCRIPTION -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Subject Description (Optional)</div>
            <div class="meta-text">
              A short text that describes the Subject
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

        <!-- SUBJECT LOGO  -->
        <div class="form-row row bottom-row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Subject Logo/Icon</div>
            <div class="meta-text">
              Kindly attach and upload a logo for the Subject
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <label for="uploadLogo">
              <input
                type="file"
                id="uploadLogo"
                accept=".png, .jpg, .jpeg"
                hidden
              />
              <div class="attach-row">
                <div class="btn btn-md attach-btn btn-cloudy mgr-32">
                  <div class="text mgr-4">
                    Select Image
                  </div>
                  <div class="icon icon-upload1 cfont-20 mgl-4"></div>
                </div>

                <div class="attach-text light-dark-text">
                  We recommend 400 x 400px in JPG or PNG format only
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      <!-- BUTTON ROW -->
      <div class="button-row d-flex justify-content-end">
        <button class="btn btn-md btn-primary pdx-45" @click="createSubject">
          Create Subject
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbBar from "@/components/globalComps/BreadcrumbBar";

export default {
  name: "CreateSubject",

  components: {
    BreadcrumbBar,
  },

  methods: {
    createSubject() {
      this.$bus.$emit("show-success-modal");
    },
  },
};
</script>

<style></style>
