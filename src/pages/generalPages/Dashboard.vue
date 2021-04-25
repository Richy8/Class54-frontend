<template>
  <div>
    <!-- BREADCRUMB BAR -->
    <breadcrumb-bar />

    <!-- CARD METRIC ROW -->
    <div class="card-metric-row mgb-32">
      <!-- METRIC CARD -->
      <metric-card
        value="125,000.00"
        text="Total Subscriptions"
        :icon="{ icon: 'wallet', path: 3 }"
      />
      <metric-card
        value="58,350.00"
        text="Phone number Subscriptions"
        :icon="{ icon: 'mobile', path: 2 }"
      />
      <metric-card
        value="62,650.00"
        text="Desktop Activations"
        :icon="{ icon: 'desktop', path: 2 }"
      />
      <metric-card
        value="4,330"
        text="Customer Signups Today"
        :icon="{ icon: 'customer', path: 1 }"
      />
    </div>

    <!-- OVERVIEW CARD STACK -->
    <div class="overview-card-section w-100">
      <!-- LEFT BLOCK -->
      <div class="left-block">
        <!-- GENERAL OVERVIEW -->
        <div class="general-overview-block rounded-4 mgb-20">
          <div class="card-title-row">General Overview</div>

          <!-- CARD ROW -->
          <div class="card-row">
            <div class="left">
              <div class="avatar avatar-indicator brand-green-bg"></div>
              <div class="text">Total Questions</div>
            </div>

            <!-- COUNT -->
            <div class="right">3245</div>
          </div>

          <!-- CARD ROW -->
          <div class="card-row">
            <div class="left">
              <div class="avatar avatar-indicator brand-green-bg"></div>
              <div class="text">Current Errors Flagged</div>
            </div>

            <!-- COUNT -->
            <div class="right">211</div>
          </div>
        </div>

        <!-- QUICK LINKS -->
        <div
          class="quick-link-block rounded-4 brand-white-bg border-brand-border-grey mgb-20"
        >
          <div class="card-title-row">Quick Links</div>

          <div
            class="link-row d-flex justify-content-between align-items-start flex-wrap mgb-13"
          >
            <router-link to class="left-card">
              <div class="title-text brand-black">Theory Questions</div>
              <div class="meta-text light-dark-text d-flex">
                Create Now
                <div class="icon icon-arrow-right"></div>
              </div>
            </router-link>

            <router-link to class="right-card">
              <div class="title-text brand-dark-green">Objective Questions</div>
              <div class="meta-text brand-dark-green d-flex">
                Create Now
                <div class="icon icon-arrow-right"></div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- RIGHT BLOCK -->
      <div class="right-block">
        <!-- COUNTRY OVERVIEW -->
        <div class="country-overview-block rounded-4 mgb-20">
          <div class="card-title-row">
            Total Customer Signups by Country
          </div>

          <!-- CARD ROW -->
          <div class="card-row">
            <div class="left">
              <div class="avatar avatar-sm brand-green-bg">
                <img
                  v-lazy="dynamicImg('Nigeria.svg')"
                  alt=""
                  class="avatar-img"
                />
              </div>
              <div class="text">Nigeria</div>
            </div>

            <!-- COUNT -->
            <div class="right">76411</div>
          </div>

          <div class="card-row">
            <div class="left">
              <div class="avatar avatar-sm brand-green-bg">
                <img
                  v-lazy="dynamicImg('Ghana.svg')"
                  alt=""
                  class="avatar-img"
                />
              </div>
              <div class="text">Ghana</div>
            </div>

            <!-- COUNT -->
            <div class="right">764</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbBar from "@/components/globalComps/BreadcrumbBar";
import MetricCard from "@/components/generalComps/dashboardComps/MetricCard";

export default {
  name: "Dashboard",

  components: {
    BreadcrumbBar,
    MetricCard,
  },

  props: {},
};
</script>

<style scoped></style>
