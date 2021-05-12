<template>
  <div class="create-years-page">
    <breadcrumb-bar item_two="Add / Edit Chapter" />

    <div class="full-width-page">
      <div class="form-container">
        <!--SELECT NOVEL -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Select a Novel</div>
            <div class="meta-text">
              The Novel under which you are adding the chapter
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <single-select
              toggleText="toggleNovelSelect"
              dropText="dropNovelSelect"
              @toggleNovelSelect="toggleNovelSelect"
              @dropNovelSelect="dropNovelSelect"
            >
              <template slot="inputWrapper">
                <div
                  class="select-input form-control pointer smooth-transition"
                  ref="selectInput"
                  :class="novel_focus ? 'active-select-input' : null"
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
                  v-if="novel_focus"
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
          </div>
        </div>

        <!-- SELECT CHAPTER -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0">
            <div class="title-text">Chapter</div>
            <div class="meta-text">
              Which chapter are you trying to create
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <single-select
              toggleText="toggleChapterSelect"
              dropText="dropChapterSelect"
              @toggleChapterSelect="toggleChapterSelect"
              @dropChapterSelect="dropChapterSelect"
            >
              <template slot="inputWrapper">
                <div
                  class="select-input form-control pointer smooth-transition"
                  ref="selectInput"
                  :class="chapter_focus ? 'active-select-input' : null"
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
                    Select Chapter
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
                  v-if="chapter_focus"
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
            <div class="title-text">Chapter Content</div>
            <div class="meta-text">
              Enter and format the entire chapter content below
            </div>
          </div>

          <div class="col-12">
            <text-editor />
          </div>
        </div>
      </div>

      <!-- BUTTON ROW -->
      <div class="button-row d-flex justify-content-end">
        <button class="btn btn-md btn-primary pdx-45" @click="addChapter">
          Add Chapter
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
      novel_focus: false,
      chapter_focus: false,
    };
  },

  methods: {
    addChapter() {
      this.$bus.$emit("show-success-modal");
    },

    toggleNovelSelect() {
      this.novel_focus = !this.novel_focus;
    },

    dropNovelSelect() {
      this.novel_focus = false;
    },

    toggleChapterSelect() {
      this.chapter_focus = !this.chapter_focus;
    },

    dropChapterSelect() {
      this.chapter_focus = false;
    },
  },
};
</script>

<style></style>
