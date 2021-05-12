<template>
  <div class="all-topics-page">
    <breadcrumb-bar item_two="All Users" />

    <div class="full-width-page">
      <entry-search-row btn_text="New User" btn_link="Class54CreateUser" />

      <!-- TABLE -->
      <div class="table-wrapper w-100">
        <div class="base-table user-table">
          <user-table-header />
          <user-table-body />
          <user-table-body />
          <user-table-body />
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
import UserTableHeader from "@/components/tableComps/UserTable/UserTableHeader";
import UserTableBody from "@/components/tableComps/UserTable/UserTableBody";

export default {
  name: "AllUsers",

  components: {
    BreadcrumbBar,
    EntrySearchRow,
    PaginationRow,
    UserTableHeader,
    UserTableBody,
  },
};
</script>

<style></style>
