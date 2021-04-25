<template>
  <div class="icon-profile position-relative" :class="size">
    <div class="path1 position-absolute"></div>
    <div class="path2 position-absolute"></div>
  </div>
</template>

<script>
export default {
  name: "UserIcon",

  props: {
    size: String,
  },
};
</script>

<style lang="scss"></style>
