<template>
  <div class="table-body">
    <div class="set-one text-left">21/01/2021</div>

    <div class="set-two text-left">
      Oluwagbohunmi Alagbaranla
    </div>

    <div class="set-three text-left">
      09036383732
    </div>

    <div class="set-four text-left">
      Olumayowa@gmail.com
    </div>

    <div class="set-five text-left">
      Admin
    </div>

    <div class="set-six text-left">
      Male
    </div>

    <div class="set-seven text-left">
      <span class="brand-green">Active</span>
    </div>

    <div class="set-eight text-center">
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

          <div class="item mgb-4" @click="deleteUser">
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
  name: "UserTableBody",

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

    deleteUser() {
      this.$bus.$emit("show-error-modal");
    },
  },
};
</script>

<style></style>
