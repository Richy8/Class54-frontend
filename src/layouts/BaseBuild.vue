<template>
  <div class="base-build">
    <!-- SIDEBAR BUILD -->
    <div
      class="sidebar-build-cover"
      @click.self="toggleSidebar"
      v-if="show_sidebar"
    >
      <nav-side-bar @hide-sidebar="toggleSidebar" />
    </div>

    <!-- BODY BUILD -->
    <div class="body-build position-relative">
      <!-- TOP BAR BUILD -->
      <nav-top-bar @show-sidebar="toggleSidebar" />

      <!-- CONTENT BUILD -->
      <div class="content-build position-relative w-100 text-justify">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { setPageBackgroundColor } from "@/services/colorHelper";
import NavTopBar from "@/components/globalComps/NavTopBar";
import NavSideBar from "@/components/globalComps/NavSideBar";

export default {
  name: "BaseBuild",

  components: {
    NavTopBar,
    NavSideBar,
  },

  data() {
    return {
      show_sidebar: false,
    };
  },

  created() {
    setPageBackgroundColor("#f5f5f5");
  },

  mounted() {
    this.checkScreenSizeOnLoad();
    window.onresize = () => this.checkScreenSizeOnLoad();
  },

  methods: {
    toggleSidebar() {
      this.show_sidebar = !this.show_sidebar;
    },

    checkScreenSizeOnLoad() {
      if (window.innerWidth <= 576) this.show_sidebar = false;
      else this.show_sidebar = true;
    },
  },
};
</script>

<style scoped></style>
