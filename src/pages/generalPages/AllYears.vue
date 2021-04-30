<template>
  <div class="all-years-page">
    <breadcrumb-bar item_two="All Years" />

    <div class="full-width-page">
      <entry-search-row btn_text="New Year" btn_link="Class54CreateYears" />

      <!-- TABLE -->
      <div class="table-wrapper w-100">
        <div class="years-table">
          <years-table-header />
          <years-table-body />
          <years-table-body />
          <years-table-body />
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
import YearsTableHeader from "@/components/tableComps/YearsTable/YearsTableHeader";
import YearsTableBody from "@/components/tableComps/YearsTable/YearsTableBody";

export default {
  name: "AllYears",

  components: {
    BreadcrumbBar,
    EntrySearchRow,
    PaginationRow,
    YearsTableHeader,
    YearsTableBody,
  },
};
</script>

<style></style>
