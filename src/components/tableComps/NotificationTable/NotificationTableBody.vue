<template>
  <div class="table-body">
    <div class="set-one text-left">03/09/2020</div>

    <div class="set-two text-left">
      02:03 PM
    </div>

    <div class="set-three text-left">
      Looking for Answers in my Soul
    </div>

    <div class="set-four text-left">
      We have the Covid-19 Vaccine now and we are
    </div>

    <div class="set-five text-left">
      Nigeria, Ghana, Sierra-leaon, Gambia
    </div>

    <div class="set-six text-left">
      <span class="brand-green">Sent</span>
    </div>

    <div class="set-seven text-center">
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

          <div class="item mgb-4" @click="deleteNotification">
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
  name: "NotificationTableBody",

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

    deleteNotification() {
      this.$bus.$emit("show-error-modal");
    },
  },
};
</script>

<style></style>
