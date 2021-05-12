<template>
  <div class="select-wrapper" @click="toggleView" v-on-clickaway="forceClose">
    <!-- SELECT INPUT  -->
    <slot name="inputWrapper"></slot>

    <!-- BOTTOM OPTIONS -->
    <slot name="optionsWrapper"></slot>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "SingleSelect",

  mixins: [clickaway],

  props: {
    toggleText: {
      type: String,
      default: "toggle",
    },

    dropText: {
      type: String,
      default: "drop",
    },
  },

  methods: {
    toggleView() {
      this.$emit(this.toggleText);
    },

    forceClose() {
      this.$emit(this.dropText);
    },
  },
};
</script>

<style></style>
