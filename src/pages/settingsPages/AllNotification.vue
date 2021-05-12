<template>
  <div class="all-topics-page">
    <breadcrumb-bar item_two="All Notifications" />

    <div class="full-width-page">
      <entry-search-row
        btn_text="New Notification"
        btn_link="Class54CreateNotification"
      />

      <!-- TABLE -->
      <div class="table-wrapper w-100">
        <div class="base-table notification-table">
          <notification-table-header />
          <notification-table-body />
          <notification-table-body />
          <notification-table-body />
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
import NotificationTableHeader from "@/components/tableComps/NotificationTable/NotificationTableHeader";
import NotificationTableBody from "@/components/tableComps/NotificationTable/NotificationTableBody";

export default {
  name: "AllNotification",

  components: {
    BreadcrumbBar,
    EntrySearchRow,
    PaginationRow,
    NotificationTableHeader,
    NotificationTableBody,
  },
};
</script>

<style></style>
