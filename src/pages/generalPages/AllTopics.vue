<template>
  <div class="all-topics-page">
    <breadcrumb-bar item_two="All Topics" />

    <div class="full-width-page">
      <entry-search-row btn_text="New Topic" btn_link="Class54CreateTopics" />

      <!-- TABLE -->
      <div class="table-wrapper w-100">
        <div class="topics-table">
          <topics-table-header />
          <topics-table-body />
          <topics-table-body />
          <topics-table-body />
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
import TopicsTableHeader from "@/components/tableComps/TopicsTable/TopicsTableHeader";
import TopicsTableBody from "@/components/tableComps/TopicsTable/TopicsTableBody";

export default {
  name: "AllTopics",

  components: {
    BreadcrumbBar,
    EntrySearchRow,
    PaginationRow,
    TopicsTableHeader,
    TopicsTableBody,
  },
};
</script>

<style></style>
