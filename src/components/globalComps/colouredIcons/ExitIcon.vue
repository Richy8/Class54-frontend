<template>
  <div class="icon-logout position-relative" id="icon" :class="size">
    <div class="path1 position-absolute"></div>
    <div class="path2 position-absolute"></div>
  </div>
</template>

<script>
export default {
  name: "ExitIcon",

  props: {
    size: String,
  },
};
</script>

<style lang="scss"></style>
