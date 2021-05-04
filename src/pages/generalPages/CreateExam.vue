<template>
  <div class="create-years-page">
    <breadcrumb-bar item_two="Create Exam" />

    <div class="full-width-page">
      <div class="form-container">
        <!--EXAM NAME -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Exam Fullname</div>
            <div class="meta-text">
              E.g Unified Tertiary Matriculation Examination
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input
              type="text"
              class="form-control"
              placeholder="Exam Fullname"
            />
          </div>
        </div>

        <!--EXAM ABBREVIATION -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Exam Abbreviation</div>
            <div class="meta-text">
              E.g JAMB(UTME)
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input
              type="text"
              class="form-control"
              placeholder="Exam Abbreviation"
            />
          </div>
        </div>

        <!--Exam DESCRIPTION -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Exam Description (Optional)</div>
            <div class="meta-text">
              A short text that describes the exam
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

        <!-- COUNTRY -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Country</div>
            <div class="meta-text">
              The country or countries in which the exam is domiciled
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <multi-select placeholder="You can select multiple" />
          </div>
        </div>

        <!-- ALLOW SCHOOL -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Check to allow School for this exam</div>
            <div class="meta-text">
              E.g Post-UTME > UNILAG
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <label class="check-row pointer" for="attachSchool">
              <input type="checkbox" class="mgr-15" id="attachSchool" />
              <div class="text">Attach School</div>
            </label>
          </div>
        </div>

        <!-- ALLOW FACULTY -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">
              Check to allow Faculty/College for the School
            </div>
            <div class="meta-text">
              E.g Post-UTME > UNILAG > Faculty of Engineering
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <label class="check-row pointer" for="attachFaculty">
              <input type="checkbox" class="mgr-15" id="attachFaculty" />
              <div class="text">Attach Faculty</div>
            </label>
          </div>
        </div>

        <!-- EXAM LOGO  -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">School Logo</div>
            <div class="meta-text">
              Kindly attach and upload a logo for the School
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
                <div class="btn btn-md attach-btn btn-cloudy mgr-15">
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

        <!-- PUBLISH STATUS -->
        <div class="form-row row bottom-row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Publish Status</div>
            <div class="meta-text">
              Should the exam show on the apps or not?
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <label class="check-row pointer" for="checkPublish">
              <input type="checkbox" class="mgr-15" id="checkPublish" />
              <div class="text">Publish Exam</div>
            </label>
          </div>
        </div>
      </div>

      <!-- BUTTON ROW -->
      <div class="button-row d-flex justify-content-end">
        <button class="btn btn-md btn-primary pdx-45" @click="createExam">
          Create Exam
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbBar from "@/components/globalComps/BreadcrumbBar";
import MultiSelect from "@/components/globalComps/MultiSelect";

export default {
  name: "CreateExam",

  components: {
    BreadcrumbBar,
    MultiSelect,
  },

  methods: {
    createExam() {
      this.$bus.$emit("show-success-modal");
    },
  },
};
</script>

<style></style>
