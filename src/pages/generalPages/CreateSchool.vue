<template>
  <div class="create-years-page">
    <breadcrumb-bar item_two="Create School" />

    <div class="full-width-page">
      <div class="form-container">
        <!--SCHOOL NAME -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">School Fullname</div>
            <div class="meta-text">
              E.g.University of Lagos
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input
              type="text"
              class="form-control"
              placeholder="School Fullname"
            />
          </div>
        </div>

        <!--SCHOOL ABBREVIATION -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">School Abbreviation</div>
            <div class="meta-text">
              E.g. UNILAG
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input
              type="text"
              class="form-control"
              placeholder="School Abbreviation"
            />
          </div>
        </div>

        <!--SCHOOL DESCRIPTION -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">School Description (Optional)</div>
            <div class="meta-text">
              A short text that describes the School
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

        <!--SCHOOL CATEGORY -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">School Category</div>
            <div class="meta-text">
              What can the school be categorized under?
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <single-select
              toggleText="toggleCategorySelect"
              dropText="dropCategorySelect"
              @toggleCategorySelect="toggleCategorySelect"
              @dropCategorySelect="dropCategorySelect"
            >
              <template slot="inputWrapper">
                <div
                  class="select-input form-control pointer smooth-transition"
                  ref="selectInput"
                  :class="category_focus ? 'active-select-input' : null"
                >
                  <!-- SELECTIONS -->
                  <div class="selections" v-if="false">
                    <!-- SELECT CARD -->
                    <div class="select-text">
                      Nigeria
                    </div>
                  </div>

                  <!-- PLACEHOLDER TEXT -->
                  <div class="placeholder-text">
                    Select Category
                  </div>

                  <!-- CLOSE BUTTON -->
                  <div
                    class="dropdown-icon icon-chevron-down brand-black"
                  ></div>
                </div>
              </template>

              <template slot="optionsWrapper">
                <div
                  class="select-option-wrapper rounded-4 index-1 mgt-5 smooth-animation smooth-transition"
                  v-if="category_focus"
                >
                  <!-- SEARCH BAR -->
                  <div class="search-bar mgb-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                    />
                    <div class="icon icon-search light-dark-text index-9"></div>
                  </div>

                  <!-- OPTIONS -->
                  <div class="option-row">Category 1</div>
                  <div class="option-row">Category 2</div>
                </div>
              </template>
            </single-select>
          </div>
        </div>

        <!-- SCHOOL LOGO  -->
        <div class="form-row row bottom-row">
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
      </div>

      <!-- BUTTON ROW -->
      <div class="button-row d-flex justify-content-end">
        <button class="btn btn-md btn-primary pdx-45" @click="createSchool">
          Create School
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbBar from "@/components/globalComps/BreadcrumbBar";
import SingleSelect from "@/components/globalComps/SingleSelect";

export default {
  name: "CreateSchool",

  components: {
    BreadcrumbBar,
    SingleSelect,
  },

  data() {
    return {
      category_focus: false,
    };
  },

  methods: {
    createSchool() {
      this.$bus.$emit("show-success-modal");
    },

    toggleCategorySelect() {
      this.category_focus = !this.category_focus;
    },

    dropCategorySelect() {
      this.category_focus = false;
    },
  },
};
</script>

<style></style>
