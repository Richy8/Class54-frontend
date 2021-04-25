<template>
  <div class="nav-wrapper">
    <!-- ROUTE WITH CHILDREN -->
    <router-link
      to
      @click.native="toggleWrapper"
      class="nav-item-row"
      v-if="children.length"
    >
      <div class="icon">
        <generate-icon
          :icon="parent.route_icon"
          :paths="parent.icon_path"
          :size="parent.icon_size"
        />
      </div>
      <div class="text">
        {{ parent.route_name }}
      </div>

      <!-- CARET -->
      <div class="caret">
        <div
          class="icon icon-chevron-down cfont-19"
          :class="show_wrapper ? 'rotate-180' : null"
        ></div>
      </div>
    </router-link>

    <!-- ROUTE WITHOUT CHILDREN -->
    <router-link :to="{ name: parent.route_link }" class="nav-item-row" v-else>
      <div class="icon">
        <generate-icon
          :icon="parent.route_icon"
          :paths="parent.icon_path"
          :size="parent.icon_size"
        />
      </div>
      <div class="text">
        {{ parent.route_name }}
      </div>
    </router-link>

    <div class="inner-wrappern" v-if="show_wrapper">
      <router-link
        :to="{ name: item.route_link }"
        class="nav-item-row nav-sub-row"
        v-for="(item, index) in children"
        :key="index"
      >
        <div class="text">
          {{ item.route_name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import GenerateIcon from "@/components/globalComps/colouredIcons/GenerateIcon";

export default {
  name: "NavItem",

  components: {
    GenerateIcon,
  },

  props: {
    parent: {
      type: Object,
      default: {
        route_name: "Nav Link",
        route_link: "",
        route_icon: "dashboard-fill",
        icon_path: 2,
        icon_size: "cfont-18 box-16",
      },
    },
    children: {
      type: Array,
      default: [
        {
          route_name: "Sub Nav Link",
          route_link: "",
        },
      ],
    },
  },

  data() {
    return {
      show_wrapper: false,
    };
  },

  methods: {
    toggleWrapper() {
      this.show_wrapper = !this.show_wrapper;
    },
  },
};
</script>

<style></style>
