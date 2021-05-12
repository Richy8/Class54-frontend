<template>
  <div class="create-years-page">
    <breadcrumb-bar item_two="Create Notification" />

    <div class="full-width-page">
      <div class="form-container">
        <!-- TITLE -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0 pdt-10">
            <div class="title-text">Title</div>
            <div class="meta-text">
              E.g The fools are in the Jungle
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input type="text" class="form-control" placeholder="Title" />
          </div>
        </div>

        <!-- MESSAGE BODY -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0 pdt-10">
            <div class="title-text">Message Body</div>
            <div class="meta-text">
              The Actual Message in the Notification
            </div>
          </div>

          <div class="col-12">
            <text-editor />
          </div>
        </div>

        <!-- GENDER -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0 pdt-10">
            <div class="title-text">Countries</div>
            <div class="meta-text">
              The countries that sees this Notification.
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <div
              class="selections mgb-25 d-flex justify-content-start align-items-center flex-nowrap"
            >
              <div class="mgr-30">
                <label class="check-row pointer" for="allCountries">
                  <input
                    type="radio"
                    v-model="country_state"
                    value="all"
                    class="mgr-10"
                    id="allCountries"
                  />
                  <div class="text">All Countries</div>
                </label>
              </div>

              <div>
                <label class="check-row pointer" for="selectCountries">
                  <input
                    type="radio"
                    v-model="country_state"
                    value="select"
                    class="mgr-10"
                    id="selectCountries"
                  />
                  <div class="text">Select Countries</div>
                </label>
              </div>
            </div>

            <!-- MULTI SELECT  -->
            <div class="w-100 smooth-transition" v-if="select_country">
              <multi-select />
            </div>
          </div>
        </div>
      </div>

      <!-- BUTTON ROW -->
      <div class="button-row d-flex justify-content-end">
        <button
          class="btn btn-md btn-cloudy pdx-45 mgr-25"
          @click="createNotification"
        >
          Save as Draft
        </button>

        <button
          class="btn btn-md btn-primary pdx-45"
          @click="createNotification"
        >
          Send Notification
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbBar from "@/components/globalComps/BreadcrumbBar";
import MultiSelect from "@/components/globalComps/MultiSelect";
import TextEditor from "@/components/globalComps/TextEditor";

export default {
  name: "CreateNotification",

  components: {
    BreadcrumbBar,
    MultiSelect,
    TextEditor,
  },

  data() {
    return {
      country_state: "all",
      select_country: false,
    };
  },

  watch: {
    country_state: {
      handler(val) {
        if (val === "select") this.select_country = true;
        else this.select_country = false;
      },
    },
  },

  methods: {
    createNotification() {
      this.$bus.$emit("show-success-modal");
    },
  },
};
</script>

<style></style>
