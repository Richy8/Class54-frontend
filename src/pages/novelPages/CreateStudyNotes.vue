<template>
  <div class="create-years-page">
    <breadcrumb-bar item_two="Add / Edit Study Note Content" />

    <div class="full-width-page">
      <div class="form-container">
        <!--SELECT NOTE CATEGORY -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Select Study Note Category</div>
            <div class="meta-text">
              The Category under which you are adding the Note
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
                    Select One
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
                  <div class="option-row">Mathematics</div>
                  <div class="option-row">English Language</div>
                </div>
              </template>
            </single-select>

            <!-- CREATE LINKS  -->
            <div class="mgt-15 mgb--5">
              <router-link :to="{ name: 'Class54CreateCategory' }"
                >Create New Category</router-link
              >
            </div>
          </div>
        </div>

        <!-- SELECT NOTE SUBJECT -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Select Study Note Subject</div>
            <div class="meta-text">
              The Subject under which you are adding the Note
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <single-select
              toggleText="toggleSubjectSelect"
              dropText="dropSubjectSelect"
              @toggleSubjectSelect="toggleSubjectSelect"
              @dropSubjectSelect="dropSubjectSelect"
            >
              <template slot="inputWrapper">
                <div
                  class="select-input form-control pointer smooth-transition"
                  ref="selectInput"
                  :class="subject_focus ? 'active-select-input' : null"
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
                    Select Subject
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
                  v-if="subject_focus"
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
                  <div class="option-row">Chapter 1</div>
                  <div class="option-row">Chapter 2</div>
                </div>
              </template>
            </single-select>

            <!-- CREATE LINKS  -->
            <div class="mgt-15 mgb--5">
              <router-link :to="{ name: 'Class54CreateSubject' }"
                >Create New Subject</router-link
              >
            </div>
          </div>
        </div>

        <!-- SELECT NOTE TOPIC -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Select Study Note Topic</div>
            <div class="meta-text">
              The Topic under which you are adding the Note
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <single-select
              toggleText="toggleTopicSelect"
              dropText="dropTopicSelect"
              @toggleTopicSelect="toggleTopicSelect"
              @dropTopicSelect="dropTopicSelect"
            >
              <template slot="inputWrapper">
                <div
                  class="select-input form-control pointer smooth-transition"
                  ref="selectInput"
                  :class="topic_focus ? 'active-select-input' : null"
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
                    Select Subject
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
                  v-if="topic_focus"
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
                  <div class="option-row">Chapter 1</div>
                  <div class="option-row">Chapter 2</div>
                </div>
              </template>
            </single-select>

            <!-- CREATE LINKS  -->
            <div class="mgt-15">
              <router-link :to="{ name: 'Class54CreateTopics' }"
                >Create New Topic</router-link
              >
            </div>

            <!-- TOAST ALERT  -->
            <toast-alert
              alert_type="success"
              alert_message="This selected Chapter already have some content. If you go ahead, you will overide the existing content."
            />
          </div>
        </div>

        <!--  CHAPTER CONTENT -->
        <div class="form-row row bottom-row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Study Note Content</div>
            <div class="meta-text">
              Enter and format the note content below
            </div>
          </div>

          <div class="col-12">
            <text-editor />
          </div>
        </div>
      </div>

      <!-- BUTTON ROW -->
      <div class="button-row d-flex justify-content-end">
        <button class="btn btn-md btn-primary pdx-45" @click="addNote">
          Add Study Note
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbBar from "@/components/globalComps/BreadcrumbBar";
import SingleSelect from "@/components/globalComps/SingleSelect";
import ToastAlert from "@/components/globalComps/ToastAlert";
import TextEditor from "@/components/globalComps/TextEditor";

export default {
  name: "AddNovelNovel",

  components: {
    BreadcrumbBar,
    SingleSelect,
    ToastAlert,
    TextEditor,
  },

  data() {
    return {
      category_focus: false,
      subject_focus: false,
      topic_focus: false,
    };
  },

  methods: {
    addNote() {
      this.$bus.$emit("show-success-modal");
    },

    toggleCategorySelect() {
      this.category_focus = !this.category_focus;
    },

    dropCategorySelect() {
      this.category_focus = false;
    },

    toggleSubjectSelect() {
      this.subject_focus = !this.subject_focus;
    },

    dropSubjectSelect() {
      this.subject_focus = false;
    },

    toggleTopicSelect() {
      this.topic_focus = !this.topic_focus;
    },

    dropTopicSelect() {
      this.topic_focus = false;
    },
  },
};
</script>

<style></style>
