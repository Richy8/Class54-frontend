<template>
  <div class="create-years-page">
    <breadcrumb-bar item_two="Create Country" />

    <div class="full-width-page">
      <div class="form-container">
        <!--COUNTRY NAME -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Country Fullname</div>
            <div class="meta-text">
              E.g. United States of America
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input
              type="text"
              class="form-control"
              placeholder="Country Fullname"
            />
          </div>
        </div>

        <!--COUNTRY ABBREVIATION -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Country Abbreviation</div>
            <div class="meta-text">
              E.g. USA
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input
              type="text"
              class="form-control"
              placeholder="Country Abbreviation"
            />
          </div>
        </div>

        <!--COUNTRY DESCRIPTION -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Country Description (Optional)</div>
            <div class="meta-text">
              A short text that describes the Country
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

        <!--COUNTRY DIALLING CODE -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Country Dialing Code</div>
            <div class="meta-text">
              The dialing code suffix for this country
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input type="text" class="form-control" placeholder="E.g. +234" />
          </div>
        </div>

        <!-- COUNTRY LOGO  -->
        <div class="form-row row bottom-row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Country Logo</div>
            <div class="meta-text">
              Kindly attach and upload a logo for the Country
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
        <button class="btn btn-md btn-primary pdx-45" @click="createCountry">
          Create Country
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbBar from "@/components/globalComps/BreadcrumbBar";

export default {
  name: "CreateCountry",

  components: {
    BreadcrumbBar,
  },

  methods: {
    createCountry() {
      this.$bus.$emit("show-success-modal");
    },
  },
};
</script>

<style></style>
