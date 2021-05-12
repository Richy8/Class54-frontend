<template>
  <div
    class="profile-dropdown position-absolute rounded-4 box-shadow-effect smooth-transition smooth-animation"
  >
    <!-- PROFILE LINK   -->
    <router-link :to="{ name: 'Class54AllProfile' }">
      <div class="icon">
        <user-icon size="cfont-16-5 box-16" />
      </div>
      <div class="text">
        Profile
      </div>
    </router-link>

    <!-- SUBSCRIBE LINK   -->
    <router-link to>
      <div class="icon">
        <control-icon size="cfont-16-5 box-16" />
      </div>
      <div class="text">
        Subscribe
      </div>
    </router-link>

    <!-- LOGOUT LINK   -->
    <router-link to>
      <div class="icon">
        <exit-icon size="cfont-16-5 box-16" />
      </div>
      <div class="text">
        Logout
      </div>
    </router-link>
  </div>
</template>

<script>
import UserIcon from "@/components/globalComps/colouredIcons/UserIcon";
import ControlIcon from "@/components/globalComps/colouredIcons/ControlIcon";
import ExitIcon from "@/components/globalComps/colouredIcons/ExitIcon";

export default {
  name: "BaseMenuPanel",

  components: {
    UserIcon,
    ControlIcon,
    ExitIcon,
  },
};
</script>

<style></style>
