<template>
  <div class="all-topics-page">
    <breadcrumb-bar item_two="All Faculties" />

    <div class="full-width-page">
      <entry-search-row
        btn_text="New Faculty"
        btn_link="Class54CreateFaculty"
      />

      <!-- TABLE -->
      <div class="table-wrapper w-100">
        <div class="faculty-table">
          <faculty-table-header />
          <faculty-table-body />
          <faculty-table-body />
          <faculty-table-body />
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
import FacultyTableHeader from "@/components/tableComps/FacultyTable/FacultyTableHeader";
import FacultyTableBody from "@/components/tableComps/FacultyTable/FacultyTableBody";

export default {
  name: "AllFaculty",

  components: {
    BreadcrumbBar,
    EntrySearchRow,
    PaginationRow,
    FacultyTableHeader,
    FacultyTableBody,
  },
};
</script>

<style></style>
