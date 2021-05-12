<template>
  <div class="create-years-page">
    <breadcrumb-bar item_two="Create Novel" />

    <div class="full-width-page">
      <div class="form-container">
        <!--NOVEL NAME -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Novel Name</div>
            <div class="meta-text">
              E.g Snake in the Monkey Shadow
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input
              type="text"
              class="form-control"
              placeholder="Name of Novel"
            />
          </div>
        </div>

        <!-- NOVEL AUTHOR -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Novel Author</div>
            <div class="meta-text">
              Name of the Author
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input type="text" class="form-control" placeholder="Author" />
          </div>
        </div>

        <!-- NOVEL EXAM -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Novel Exam</div>
            <div class="meta-text">
              The Exams that the Novel belong to
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <multi-select placeholder="You can select multiple" />
          </div>
        </div>

        <!-- PUBLISH STATUS -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Publish Status</div>
            <div class="meta-text">
              Should the Novel show on the apps or not?
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <label class="check-row pointer" for="attachSchool">
              <input type="checkbox" class="mgr-15" id="attachSchool" />
              <div class="text">Make Active</div>
            </label>
          </div>
        </div>

        <!-- COUNTRY LOGO  -->
        <div class="form-row row bottom-row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Novel Logo</div>
            <div class="meta-text">
              Kindly attach and upload a logo for the Novel
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
        <button class="btn btn-md btn-primary pdx-45" @click="createNovel">
          Create Novel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbBar from "@/components/globalComps/BreadcrumbBar";
import MultiSelect from "@/components/globalComps/MultiSelect";

export default {
  name: "CreateNovel",

  components: {
    BreadcrumbBar,
    MultiSelect,
  },

  methods: {
    createNovel() {
      this.$bus.$emit("show-success-modal");
    },
  },
};
</script>

<style></style>
