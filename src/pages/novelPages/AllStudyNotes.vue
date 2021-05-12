<template>
  <div class="all-topics-page">
    <breadcrumb-bar item_two="All Study Notes" />

    <div class="full-width-page">
      <entry-search-row
        btn_text="New Note"
        btn_link="Class54CreateStudyNotes"
      />

      <!-- TABLE -->
      <div class="table-wrapper w-100">
        <div class="base-table note-table">
          <note-table-header />
          <note-table-body />
          <note-table-body />
          <note-table-body />
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
import NoteTableHeader from "@/components/tableComps/NoteTable/NoteTableHeader";
import NoteTableBody from "@/components/tableComps/NoteTable/NoteTableBody";

export default {
  name: "AllStudyNotes",

  components: {
    BreadcrumbBar,
    EntrySearchRow,
    PaginationRow,
    NoteTableHeader,
    NoteTableBody,
  },
};
</script>

<style></style>
