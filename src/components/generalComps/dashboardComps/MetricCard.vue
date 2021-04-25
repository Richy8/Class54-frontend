<template>
  <div class="metric-card rounded-4 brand-white-bg">
    <!-- LEFT -->
    <div class="left">
      <div class="value-text font-weight-bold mgb-6 brand-black">
        &#8358;{{ value }}
      </div>
      <div class="meta-text font-weight-600 light-dark-text">
        {{ text }}
      </div>
    </div>

    <!-- RIGHT -->
    <div class="right mgt-2">
      <generate-icon
        :icon="icon.icon"
        :paths="icon.path"
        size="cfont-21 box-18"
      />
    </div>
  </div>
</template>

<script>
import GenerateIcon from "@/components/globalComps/colouredIcons/GenerateIcon";

export default {
  name: "MetricCard",

  components: {
    GenerateIcon,
  },

  props: {
    value: {
      type: [String, Number],
      default: "1,000,000",
    },
    text: {
      type: String,
      default: "Sub meta-text",
    },
    icon: {
      type: Object,
      default: {
        icon: "wallet",
        path: 3,
      },
    },
  },
};
</script>

<style></style>
