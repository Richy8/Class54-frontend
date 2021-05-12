<template>
  <div class="all-topics-page">
    <breadcrumb-bar item_two="All Novels" />

    <div class="full-width-page">
      <entry-search-row btn_text="New Novel" btn_link="Class54CreateNovel" />

      <!-- TABLE -->
      <div class="table-wrapper w-100">
        <div class="base-table novel-table">
          <novel-table-header />
          <novel-table-body />
          <novel-table-body />
          <novel-table-body />
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
import NovelTableHeader from "@/components/tableComps/NovelTable/NovelTableHeader";
import NovelTableBody from "@/components/tableComps/NovelTable/NovelTableBody";

export default {
  name: "AllNovel",

  components: {
    BreadcrumbBar,
    EntrySearchRow,
    PaginationRow,
    NovelTableHeader,
    NovelTableBody,
  },
};
</script>

<style></style>
