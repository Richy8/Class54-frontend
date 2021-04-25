<template>
  <div class="icon-cloud position-relative" :class="size">
    <div class="path1 position-absolute"></div>
    <div class="path2 position-absolute"></div>
  </div>
</template>

<script>
export default {
  name: "CloudIcon",

  props: {
    size: String,
  },
};
</script>

<style lang="scss"></style>
