<template>
  <div class="topbar-build brand-white-bg index-9">
    <!-- PAGE TITLE -->
    <div class="page-title font-weight-600 dark-text">
      {{ $route.meta.title || "Dashboard" }}
    </div>

    <!-- HAMBURGER MENU -->
    <div class="burger-menu pointer" @click="$emit('show-sidebar')">
      <div class="line line-one"></div>
      <div class="line line-two"></div>
      <div class="line line-three"></div>
    </div>

    <!-- USER PROFILE -->
    <div class="user-profile">
      <div class="avatar avatar-md mgr-18">
        <img v-lazy="dynamicImg('UserAvatar.png')" alt="" class="avatar-img" />
      </div>

      <!-- PROFILE DETAILS -->
      <div
        class="profile-details position-relative brand-black"
        @click="toggleBaseMenu"
        v-on-clickaway="closeMenuPanel"
      >
        <div class="user-name font-weight-600 mgr-17 pointer">
          Ibidunayo
        </div>
        <div
          class="icon icon-chevron-down cfont-18 font-weight-600 pointer smooth-transition"
          :class="show_base_menu ? 'rotate-180' : null"
        ></div>

        <!-- PROFILE DROPDOWN -->
        <base-menu-panel v-if="show_base_menu" />
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import BaseMenuPanel from "@/components/globalComps/BaseMenuPanel";

export default {
  name: "NavTopBar",

  mixins: [clickaway],

  components: {
    BaseMenuPanel,
  },

  data() {
    return {
      show_base_menu: false,
    };
  },

  methods: {
    toggleBaseMenu() {
      this.show_base_menu = !this.show_base_menu;
    },

    closeMenuPanel() {
      this.show_base_menu = false;
    },
  },
};
</script>

<style></style>
