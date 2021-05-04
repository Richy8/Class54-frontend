<template>
  <div class="all-topics-page">
    <breadcrumb-bar item_two="All Subjects" />

    <div class="full-width-page">
      <entry-search-row
        btn_text="New Subject"
        btn_link="Class54CreateSubject"
      />

      <!-- TABLE -->
      <div class="table-wrapper w-100">
        <div class="base-subject subject-table">
          <subject-table-header />
          <subject-table-body />
          <subject-table-body />
          <subject-table-body />
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
import SubjectTableHeader from "@/components/tableComps/SubjectTable/SubjectTableHeader";
import SubjectTableBody from "@/components/tableComps/SubjectTable/SubjectTableBody";

export default {
  name: "AllSubject",

  components: {
    BreadcrumbBar,
    EntrySearchRow,
    PaginationRow,
    SubjectTableHeader,
    SubjectTableBody,
  },
};
</script>

<style></style>
