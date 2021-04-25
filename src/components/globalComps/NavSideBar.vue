<template>
  <div class="sidebar-build brand-white-bg text-justify smooth-transition">
    <div class="logo-row">
      <img v-lazy="staticImg('Class54Logo.svg')" alt="class54 Logo" />
    </div>

    <div class="close-row w-100 d-flex justify-content-end pdr-20 d-sm-none">
      <div
        class="icon-close brand-dark-blue cfont-18 pointer"
        @click="$emit('hide-sidebar')"
      ></div>
    </div>

    <!-- NAVLIST ITEMS -->
    <nav-list />
  </div>
</template>

<script>
import NavList from "@/components/globalComps/NavList";

export default {
  name: "NavSideBar",

  components: {
    NavList,
  },
};
</script>

<style></style>
