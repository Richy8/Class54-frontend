<template>
  <div class="icon-success" :class="size">
    <div class="path1"></div>
    <div class="path2"></div>
  </div>
</template>

<script>
export default {
  name: "SuccessIcon",

  props: {
    size: String,
  },
};
</script>

<style lang="scss" scoped>
.icon-success {
  position: relative;
  @include square-shape(35);

  .path1 {
    position: absolute;
  }
  .path2 {
    position: absolute;
  }

  .path1,
  .path2 {
    &:before {
      color: $brand-green;
    }
  }
}
</style>
