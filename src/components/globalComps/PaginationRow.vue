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

    <div class="right">
      <div class="nav">
        <div class="icon icon-chevron-down rotate-90"></div>
      </div>

      <!--PAGING -->
      <div class="paging">
        <div class="item">1</div>
        <div class="item active-item">2</div>
        <div class="item">3</div>
        <div class="item">
          <div class="icon icon-more rotate-90"></div>
        </div>
        <div class="item">9</div>
      </div>

      <div class="nav">
        <div class="icon icon-chevron-down rotate--90"></div>
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
