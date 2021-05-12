<template>
  <div class="create-years-page">
    <breadcrumb-bar item_two="Profile" />

    <div class="full-width-page">
      <div class="form-container w-100">
        <div class="row w-100">
          <!-- PROFILE CARD  -->
          <div class="col-12 col-md-3 profile-wrapper">
            <div class="user-profile-card rounded-8 brand-grey-bg w-100">
              <!-- USER AVATAR  -->
              <div class="avatar avatar-lg mgb-35">
                <img
                  v-lazy="dynamicImg('UserAvatar.png')"
                  alt=""
                  class="avatar-img"
                />
              </div>

              <!-- TITLE  -->
              <div
                class="title-text brand-black font-weight-bold mgb-4 text-center"
              >
                My Profile
              </div>

              <!-- ROLE  -->
              <div class="user-role light-dark-text text-center">
                Super Admin
              </div>
            </div>
          </div>

          <!-- PROFILE UPDATE CARD  -->
          <div class="col-12 col-md-9 profile-update-wrapper">
            <!--FULLNAME -->
            <div class="form-row row">
              <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0 pdt-10">
                <div class="title-text">Fullname</div>
                <div class="meta-text">
                  Your Fullname
                </div>
              </div>

              <div class="col-12 col-md-7 col-lg-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Fullname"
                />
              </div>
            </div>

            <!--EMAIL ADDRESS -->
            <div class="form-row row">
              <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0 pdt-10">
                <div class="title-text">Email Address</div>
                <div class="meta-text">
                  Your Email Address
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

            <!--PHONE NUMBER -->
            <div class="form-row row">
              <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0 pdt-10">
                <div class="title-text">Phone Number</div>
                <div class="meta-text">
                  Your Phone Number
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
                <div class="title-text">Gender</div>
                <div class="meta-text">
                  Your Gender
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

            <!-- PASSWORD  -->
            <div class="form-row row bottom-row">
              <div class="col-12 col-md-5 col-lg-6 mb-3 mb-md-0 pdt-10">
                <div class="title-text">Change Password</div>
                <div class="meta-text">
                  Enter your new password
                </div>
              </div>

              <div class="col-12 col-md-7 col-lg-6">
                <div class="position-relative">
                  <input
                    :type="password_type ? 'password' : 'text'"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                  />

                  <div
                    class="show-password-btn position-absolute light-dark-text smooth-transition pointer"
                    @click="togglePasswordType"
                  >
                    <span class="cfont-20" :class="generateIcon"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BUTTON ROW -->
      <div class="button-row d-flex justify-content-end">
        <button class="btn btn-md btn-primary pdx-45" @click="updateProfile">
          Update Proflie
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbBar from "@/components/globalComps/BreadcrumbBar";

export default {
  name: "Profile",

  components: {
    BreadcrumbBar,
  },

  computed: {
    generateIcon() {
      if (this.password_type) return `icon-view`;
      else return `icon-disable`;
    },
  },

  data() {
    return {
      password_type: true,
      gender: "female",
    };
  },

  methods: {
    updateProfile() {
      this.$bus.$emit("show-success-modal");
    },

    togglePasswordType() {
      this.password_type = !this.password_type;
    },
  },
};
</script>

<style></style>
