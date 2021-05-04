<template>
  <div class="all-topics-page">
    <breadcrumb-bar item_two="All Categories" />

    <div class="full-width-page">
      <entry-search-row
        btn_text="New Category"
        btn_link="Class54CreateCategory"
      />

      <!-- TABLE -->
      <div class="table-wrapper w-100">
        <div class="base-table category-table">
          <category-table-header />
          <category-table-body />
          <category-table-body />
          <category-table-body />
        </div>
      </div>
      <!-- TABLE -->

      <pagination-row />
    </div>
  </div>
</template>

<script>
import BreadcrumbBar from "@/components/globalComps/BreadcrumbBar";
import EntrySearchRow from "@/components/globalComps/EntrySearchRow";
import PaginationRow from "@/components/globalComps/PaginationRow";
import CategoryTableHeader from "@/components/tableComps/CategoryTable/CategoryTableHeader";
import CategoryTableBody from "@/components/tableComps/CategoryTable/CategoryTableBody";

export default {
  name: "AllCategory",

  components: {
    BreadcrumbBar,
    EntrySearchRow,
    PaginationRow,
    CategoryTableHeader,
    CategoryTableBody,
  },
};
</script>

<style></style>
