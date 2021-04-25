<template>
  <div class="icon-subscribe position-relative brand-green" :class="size">
    <div class="path1 position-absolute"></div>
    <div class="path2 position-absolute"></div>
  </div>
</template>

<script>
export default {
  name: "ControlIcon",

  props: {
    size: String,
  },
};
</script>

<style lang="scss"></style>
