<template>
  <div class="entry-search-row mgb-20">
    <!-- SEARCH COLUMN -->
    <div class="search-column position-relative">
      <input type="text" class="form-control input-md" placeholder="Search" />
      <div class="icon icon-search light-dark-text index-9"></div>
    </div>

    <!-- CREATE COLUMN -->
    <div class="create-column">
      <router-link :to="{ name: btn_link }" class="btn btn-md btn-primary">
        <div class="mgr-4">
          {{ btn_text }}
        </div>
        <div class="icon-add brand-white cfont-19 mgl-4"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "EntrySearchRow",

  props: {
    btn_text: {
      type: String,
      required: true,
    },
    btn_link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
