<template>
  <div class="icon-dashboard-fill position-relative" :class="size">
    <div class="path1 position-absolute"></div>
    <div class="path2 position-absolute"></div>
  </div>
</template>

<script>
export default {
  name: "DashboardIcon",

  props: {
    size: String,
  },
};
</script>

<style lang="scss"></style>
