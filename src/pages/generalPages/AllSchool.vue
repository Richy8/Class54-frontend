<template>
  <div class="all-topics-page">
    <breadcrumb-bar item_two="All Schools" />

    <div class="full-width-page">
      <entry-search-row btn_text="New School" btn_link="Class54CreateSchool" />

      <!-- TABLE -->
      <div class="table-wrapper w-100">
        <div class="base-table school-table">
          <school-table-header />
          <school-table-body />
          <school-table-body />
          <school-table-body />
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
import SchoolTableHeader from "@/components/tableComps/SchoolTable/SchoolTableHeader";
import SchoolTableBody from "@/components/tableComps/SchoolTable/SchoolTableBody";

export default {
  name: "AllSchool",

  components: {
    BreadcrumbBar,
    EntrySearchRow,
    PaginationRow,
    SchoolTableHeader,
    SchoolTableBody,
  },
};
</script>

<style></style>
