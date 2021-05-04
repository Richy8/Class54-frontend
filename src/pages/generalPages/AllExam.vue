<template>
  <div class="all-topics-page">
    <breadcrumb-bar item_two="All Exams" />

    <div class="full-width-page">
      <entry-search-row btn_text="New Exam" btn_link="Class54CreateExam" />

      <!-- TABLE -->
      <div class="table-wrapper w-100">
        <div class="base-table exam-table">
          <exam-table-header />
          <exam-table-body />
          <exam-table-body />
          <exam-table-body />
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
import ExamTableHeader from "@/components/tableComps/ExamTable/ExamTableHeader";
import ExamTableBody from "@/components/tableComps/ExamTable/ExamTableBody";

export default {
  name: "AllExam",

  components: {
    BreadcrumbBar,
    EntrySearchRow,
    PaginationRow,
    ExamTableHeader,
    ExamTableBody,
  },
};
</script>

<style></style>
