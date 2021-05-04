<template>
  <div class="table-body">
    <div class="set-one text-left">2643GD</div>
    <div class="set-two text-left">
      Use of English
    </div>
    <div class="set-three text-left">
      This was a great year to start practicibg my new move.
    </div>
    <div class="set-four text-left">
      <div class="avatar">
        <img v-lazy="dynamicImg('JAMB.png')" alt="" class="avatar-img" />
      </div>
    </div>
    <div class="set-five text-center">
      <div
        class="icon icon-more brand-black cfont-16 pointer"
        @click="toggleDropdown"
        v-on-clickaway="closeDropdown"
      >
        <!-- TABLE DROPDOWN-->
        <div
          class="table-dropdown navigation-shadow-effect smooth-animation"
          v-if="show_dropdown"
        >
          <div class="item mgt-4">
            <div class="icon icon-edit"></div>
            <div class="value-text">Edit</div>
          </div>

          <div class="item mgb-4" @click="deleteSubject">
            <div class="icon icon-delete"></div>
            <div class="value-text">Delete</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "SubjectTableBody",

  mixins: [clickaway],

  data() {
    return {
      show_dropdown: false,
    };
  },

  methods: {
    toggleDropdown() {
      this.show_dropdown = !this.show_dropdown;
    },

    closeDropdown() {
      this.show_dropdown = false;
    },

    deleteSubject() {
      this.$bus.$emit("show-error-modal");
    },
  },
};
</script>

<style></style>
