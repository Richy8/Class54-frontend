<template>
  <div class="select-wrapper">
    <div
      class="select-input form-control pointer smooth-transition"
      ref="selectInput"
      @click="is_focus = true"
      :class="is_focus ? 'active-select-input' : null"
    >
      <!-- SELECTIONS -->
      <div class="selections">
        <!-- SELECT CARD -->
        <div class="select-card">
          <div class="text mgr-4">Nigeria</div>
          <div class="icon icon-close"></div>
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
      <label class="option-row option-mix-row pointer" for="selectItem">
        <div class="left">
          <input type="checkbox" class="mgr-15" id="selectItem" />
          <div class="text">Nigeria</div>
        </div>

        <div class="right">
          <div class="avatar">
            <img v-lazy="dynamicImg('Nigeria.svg')" alt="" class="avatar-img" />
          </div>
        </div>
      </label>

      <label class="option-row option-mix-row pointer" for="selectItem2">
        <div class="left">
          <input type="checkbox" class="mgr-15" id="selectItem2" />
          <div class="text">Ghana</div>
        </div>

        <div class="right">
          <div class="avatar">
            <img v-lazy="dynamicImg('Ghana.svg')" alt="" class="avatar-img" />
          </div>
        </div>
      </label>

      <!-- BUTTON ROW -->
      <div class="button-row mgt-15">
        <button
          class="btn btn-md bg-transparent no-shadow mgr-15 brand-dark-green"
        >
          RESET
        </button>

        <button class="btn btn-md btn-primary" @click="is_focus = false">
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "MultiSelect",

  mixins: [clickaway],

  props: {
    placeholder: {
      type: String,
      default: "Select multiple",
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
