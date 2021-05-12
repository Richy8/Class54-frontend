<template>
  <div class="create-years-page">
    <breadcrumb-bar item_two="Create User" />

    <div class="full-width-page">
      <div class="form-container">
        <!-- USER NAME -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0 pdt-10">
            <div class="title-text">User Fullname</div>
            <div class="meta-text">
              E.g Adebayo Chukwuma
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input type="text" class="form-control" placeholder="Fullname" />
          </div>
        </div>

        <!-- USER EMAIL ADDRESS -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0 pdt-10">
            <div class="title-text">User Email Address</div>
            <div class="meta-text">
              The Person’s email address
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input
              type="text"
              class="form-control"
              placeholder="Email Address"
            />
          </div>
        </div>

        <!--Exam DESCRIPTION -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0 pdt-10">
            <div class="title-text">User Phone Number</div>
            <div class="meta-text">
              The Person’s Phone number
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number"
            />
          </div>
        </div>

        <!-- GENDER -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0 pdt-10">
            <div class="title-text">User's Gender</div>
            <div class="meta-text">
              Is the Person male or female?
            </div>
          </div>

          <div
            class="col-12 col-md-7 col-lg-6 d-flex justify-content-start align-items-center flex-nowrap"
          >
            <!-- FEMALE  -->
            <div class="female mgr-30">
              <label class="check-row pointer" for="femaleGender">
                <input
                  type="radio"
                  v-model="gender"
                  value="female"
                  class="mgr-10"
                  id="femaleGender"
                />
                <div class="text">Female</div>
              </label>
            </div>

            <!-- MALE  -->
            <div class="male">
              <label class="check-row pointer" for="maleGender">
                <input
                  type="radio"
                  v-model="gender"
                  value="male"
                  class="mgr-10"
                  id="maleGender"
                />
                <div class="text">Male</div>
              </label>
            </div>
          </div>
        </div>

        <!-- COUNTRY -->
        <div class="form-row row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0 pdt-10">
            <div class="title-text">User's Role</div>
            <div class="meta-text">
              How much access should the User have
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6">
            <single-select
              toggleText="toggleRoleSelect"
              dropText="dropRoleSelect"
              @toggleRoleSelect="toggleRoleSelect"
              @dropRoleSelect="dropRoleSelect"
            >
              <template slot="inputWrapper">
                <div
                  class="select-input form-control pointer smooth-transition"
                  ref="selectInput"
                  :class="role_focus ? 'active-select-input' : null"
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
                    Select User Role
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
                  v-if="role_focus"
                >
                  <!-- OPTIONS -->
                  <div class="option-row">Administrator</div>
                  <div class="option-row">Editor</div>
                </div>
              </template>
            </single-select>
          </div>
        </div>

        <!-- PUBLISH STATUS -->
        <div class="form-row row bottom-row">
          <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0 pdt-10">
            <div class="title-text">User's Status</div>
            <div class="meta-text">
              Activate or Suspend User’s account
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-6 pdt-10">
            <label class="check-row" for="">
              <!-- SELECT TOGGLER  -->
              <div
                class="select-option-toggler mgr-15"
                :class="is_active ? 'active-select-toggler' : null"
              >
                <div class="option-indicator" @click="toggleSelection"></div>
              </div>
              <div class="text smooth-transition" style="margin-top: -0.5px">
                {{ is_active ? "Active" : "Inactive" }}
              </div>
            </label>
          </div>
        </div>
      </div>

      <!-- BUTTON ROW -->
      <div class="button-row d-flex justify-content-end">
        <button class="btn btn-md btn-primary pdx-45" @click="createUser">
          Create User
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbBar from "@/components/globalComps/BreadcrumbBar";
import SingleSelect from "@/components/globalComps/SingleSelect";

export default {
  name: "CreateUsers",

  components: {
    BreadcrumbBar,
    SingleSelect,
  },

  data() {
    return {
      test_type: "objective_theory",
      gender: "female",
      role_focus: false,
      is_active: false,
    };
  },

  methods: {
    createUser() {
      this.$bus.$emit("show-success-modal");
    },

    toggleRoleSelect() {
      this.role_focus = !this.role_focus;
    },

    dropRoleSelect() {
      this.role_focus = false;
    },

    toggleSelection() {
      this.is_active = !this.is_active;
    },
  },
};
</script>

<style></style>
