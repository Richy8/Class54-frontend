<template>
  <div class="breadcrumb-bar">
    <!-- ITEM ONE -->
    <div class="bar">
      <div class="item mgr-8" v-if="isCurrentRoute">Dashboard</div>
      <div class="item mgr-8 pointer" @click="goToDashboard" v-else>
        Dashboard
      </div>
      <div
        class="icon icon-chevron-down rotate-270 mgr--2"
        v-if="item_two"
      ></div>
    </div>

    <!-- ITEM TWO -->
    <div class="bar" v-if="item_two">
      <div class="item mgr-8" :class="item_three ? null : 'font-weight-bold'">
        {{ item_two }}
      </div>
      <div
        class="icon icon-chevron-down rotate-270 mgr--2"
        v-if="item_three"
      ></div>
    </div>

    <!-- ITEM TWO -->
    <div class="bar" v-if="item_three">
      <div class="item font-weight-bold">{{ item_three }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadcrumbBar",

  props: {
    item_two: String,
    item_three: String,
  },

  computed: {
    isCurrentRoute() {
      return this.$router.currentRoute.name === "Class54Dashboard"
        ? true
        : false;
    },
  },

  methods: {
    goToDashboard() {
      this.$router.push({ name: "Class54Dashboard" });
    },
  },
};
</script>

<style></style>
