<template>
  <div
    class="select-wrapper"
    @click="toggleIsFocus"
    v-on-clickaway="dropIsFocus"
  >
    <div
      class="select-input form-control pointer smooth-transition"
      ref="selectInput"
      :class="is_focus ? 'active-select-input' : null"
    >
      <!-- SELECTIONS -->
      <div class="selections">
        <!-- SELECT CARD -->
        <div class="select-text">
          Nigeria
        </div>
      </div>

      <!-- PLACEHOLDER TEXT -->
      <div class="placeholder-text" v-if="false">{{ placeholder }}</div>

      <!-- CLOSE BUTTON -->
      <div class="dropdown-icon icon-chevron-down brand-black"></div>
    </div>

    <!-- BOTTOM OPTIONS -->
    <div
      class="select-option-wrapper rounded-4 index-1 mgt-5 smooth-animation smooth-transition"
      v-if="is_focus"
    >
      <!-- SEARCH BAR -->
      <div class="search-bar mgb-4">
        <input type="text" class="form-control" placeholder="Search" />
        <div class="icon icon-search light-dark-text index-9"></div>
      </div>

      <!-- OPTIONS -->
      <div class="option-row">Mathematics</div>
      <div class="option-row">English Language</div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "SingleSelect",

  mixins: [clickaway],

  props: {
    placeholder: {
      type: String,
      default: "Select one",
    },
  },

  data() {
    return {
      is_focus: false,
    };
  },

  methods: {
    toggleIsFocus() {
      this.is_focus = !this.is_focus;
    },

    dropIsFocus() {
      this.is_focus = false;
    },
  },
};
</script>

<style></style>
