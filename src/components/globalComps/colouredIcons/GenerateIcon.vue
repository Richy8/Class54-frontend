<template>
  <div class="position-relative" :class="'icon-' + icon + ' ' + size">
    <div
      class="position-absolute"
      :class="`path${index + 1}`"
      v-for="(item, index) in path_count"
      :key="index"
    ></div>
  </div>
</template>

<script>
export default {
  name: "GenerateIcon",

  props: {
    icon: String,
    paths: {
      type: Number,
      default: 2,
    },
    size: {
      type: String,
      default: "cfont-18 box-16",
    },
  },

  data() {
    return {
      path_count: Array(this.paths).fill(true),
    };
  },
};
</script>

<style lang="scss"></style>
