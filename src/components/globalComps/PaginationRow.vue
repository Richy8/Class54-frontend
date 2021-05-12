<template>
  <div class="pagination-row mgt-16">
    <div class="left">
      <!-- SELECT PAGE ITEMS -->
      <div class="select-page-item light-dark-text pointer text-left">
        4 Items <span class="icon-chevron-down mgl-10"></span>
      </div>

      <!-- PAGINATION TEXT -->
      <div class="pagination-text text-left light-dark-text">
        Showing 1 to 10 of 20 entries.
      </div>
    </div>

    <div class="right mgb-5">
      <div class="nav">
        <div class="icon icon-chevron-down rotate-90"></div>
        <div class="nav-text mgl-3 pdr-4">Prev</div>
      </div>

      <!--PAGING -->
      <div class="paging">
        <input
          type="text"
          class="form-control page-input text-center mgr-7"
          placeholder="1"
        />
        <div class="page-slash">/</div>
        <div class="page-total mgl-5 mgr-4">237</div>
        <button class="btn btn-primary mgl-4 page-btn">Go</button>
      </div>

      <div class="nav">
        <div class="nav-text mgr-3 pdl-5">Next</div>
        <div class="icon icon-chevron-down rotate--90"></div>
      </div>

      <!-- ERROR TEXT -->
      <div class="error-text" v-if="false">
        The page number entered does not exist
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationRow",
};
</script>

<style></style>
