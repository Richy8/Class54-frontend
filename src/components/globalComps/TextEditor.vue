<template>
  <div class="text-editor mgt-20">
    <div class="tools-row brand-border-grey-bg dark-text">
      <!-- LEFT TOOLS  -->
      <div class="left-tools border">
        <!-- TEXT FORMAT TOOLS  -->
        <div class="text-format-tools">
          <div class="icon icon-text-bold"></div>
          <div class="icon icon-text-italic"></div>
          <div class="icon icon-text-underline"></div>
        </div>

        <!-- TEXT ALIGN TOOLS  -->
        <div class="text-align-tools">
          <div class="icon icon-list mgr-10"></div>
          <div class="icon icon-text-align-left"></div>
          <div class="icon icon-text-justify"></div>
          <div class="icon icon-text-align-right"></div>
        </div>
      </div>

      <!-- RIGHT TOOLS  -->
      <div class="right-tools border">
        <div class="text-format-tools">
          <div class="icon icon-link mgr-10"></div>
          <div class="icon icon-table"></div>
          <div class="icon icon-text-bgcolor"></div>
          <div class="icon icon-image"></div>
        </div>

        <div class="text-align-tools">
          <div class="icon icon-more dark-text"></div>
        </div>
      </div>
    </div>

    <!-- CONTENT AREA  -->
    <div class="wrapper position-relative w-100">
      <div class="content-area w-100" contenteditable="true"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextEditor",
};
</script>

<style lang="scss" scoped></style>
