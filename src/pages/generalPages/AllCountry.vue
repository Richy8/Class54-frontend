<template>
  <div class="all-topics-page">
    <breadcrumb-bar item_two="All Countries" />

    <div class="full-width-page">
      <entry-search-row
        btn_text="New Country"
        btn_link="Class54CreateCountry"
      />

      <!-- TABLE -->
      <div class="table-wrapper w-100">
        <div class="base-table country-table">
          <country-table-header />
          <country-table-body />
          <country-table-body />
          <country-table-body />
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
import CountryTableHeader from "@/components/tableComps/CountryTable/CountryTableHeader";
import CountryTableBody from "@/components/tableComps/CountryTable/CountryTableBody";

export default {
  name: "AllCountry",

  components: {
    BreadcrumbBar,
    EntrySearchRow,
    PaginationRow,
    CountryTableHeader,
    CountryTableBody,
  },
};
</script>

<style></style>
