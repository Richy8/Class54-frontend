<template>
  <div class="navlist">
    <div v-for="(item, index) in nav_items" :key="index">
      <div class="nav-title-row text-uppercase light-dark-text">
        {{ item.title }}
      </div>

      <!-- NAV ITEM -->
      <nav-item
        :parent="item.parent"
        :children="item.children"
        v-for="(item, index) in item.items"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import NavItem from "@/components/globalComps/NavItem";

export default {
  name: "NavList",

  components: {
    NavItem,
  },

  data() {
    return {
      nav_items: [
        {
          title: "General",
          items: [
            {
              parent: {
                route_name: "Dashboard",
                route_link: "Class54Dashboard",
                route_icon: "dashboard-fill",
              },
              children: [],
            },
            {
              parent: {
                route_name: "Year",
                route_link: "",
                route_icon: "cloud",
              },
              children: [
                { route_name: "All Years", route_link: "Class54AllYears" },
                { route_name: "Create Year", route_link: "Class54CreateYears" },
              ],
            },
            {
              parent: {
                route_name: "Topic",
                route_link: "",
                route_icon: "topic",
              },
              children: [
                { route_name: "All Topics", route_link: "" },
                { route_name: "Create Topic", route_link: "" },
              ],
            },
            {
              parent: {
                route_name: "Faculty",
                route_link: "",
                route_icon: "substract",
              },
              children: [
                { route_name: "All Faculties", route_link: "" },
                { route_name: "Create Faculty", route_link: "" },
              ],
            },
            {
              parent: {
                route_name: "Category",
                route_link: "",
                route_icon: "layers",
              },
              children: [
                { route_name: "All Categories", route_link: "" },
                { route_name: "Create Category", route_link: "" },
              ],
            },
            {
              parent: {
                route_name: "Subject",
                route_link: "",
                route_icon: "subject",
                icon_size: "cfont-13 mgt-5 mgl-2",
              },
              children: [
                { route_name: "All Subjects", route_link: "" },
                { route_name: "Create Subject", route_link: "" },
              ],
            },
            {
              parent: {
                route_name: "Country",
                route_link: "",
                route_icon: "country",
              },
              children: [
                { route_name: "All Countries", route_link: "" },
                { route_name: "Create Country", route_link: "" },
              ],
            },
            {
              parent: {
                route_name: "School",
                route_link: "",
                route_icon: "school",
              },
              children: [
                { route_name: "All Schools", route_link: "" },
                { route_name: "Create Schools", route_link: "" },
              ],
            },
            {
              parent: {
                route_name: "Exam",
                route_link: "",
                route_icon: "clock",
                icon_path: 3,
              },
              children: [
                { route_name: "All Exams", route_link: "" },
                { route_name: "Create Exam", route_link: "" },
              ],
            },
            {
              parent: {
                route_name: "Question",
                route_link: "",
                route_icon: "question",
                icon_path: 3,
              },
              children: [
                { route_name: "All Questions", route_link: "" },
                { route_name: "Create Question", route_link: "" },
              ],
            },
          ],
        },

        {
          title: "Subscription",
          items: [
            {
              parent: {
                route_name: "Subscriptions",
                route_link: "",
                route_icon: "logs",
                icon_path: 4,
              },
              children: [
                { route_name: "Phone number Subs", route_link: "" },
                { route_name: "Desktop Activations", route_link: "" },
                { route_name: "All Subscription Plans", route_link: "" },
                { route_name: "Create Subscription Plan", route_link: "" },
              ],
            },
            {
              parent: {
                route_name: "Subscribe User",
                route_link: "",
                route_icon: "subscribe",
              },
              children: [
                { route_name: "Subscribe Phone no.", route_link: "" },
                { route_name: "Activate Desktop", route_link: "" },
              ],
            },
          ],
        },

        {
          title: "Notes & Novels",
          items: [
            {
              parent: {
                route_name: "Novel",
                route_link: "",
                route_icon: "novel",
              },
              children: [
                { route_name: "All Novels", route_link: "" },
                { route_name: "Create Novel", route_link: "" },
                { route_name: "Add/Edit Chapter", route_link: "" },
              ],
            },
            {
              parent: {
                route_name: "Study Notes",
                route_link: "",
                route_icon: "study-note",
              },
              children: [
                { route_name: "All Notes", route_link: "" },
                { route_name: "Add/Edit Note Content", route_link: "" },
              ],
            },
          ],
        },

        {
          title: "Settings",
          items: [
            {
              parent: {
                route_name: "Notification",
                route_link: "",
                route_icon: "mail",
              },
              children: [
                { route_name: "All Notifications", route_link: "" },
                { route_name: "Create Notifications", route_link: "" },
              ],
            },
            {
              parent: {
                route_name: "Users",
                route_link: "",
                route_icon: "users",
              },
              children: [
                { route_name: "All Users", route_link: "" },
                { route_name: "Create Users", route_link: "" },
              ],
            },
            {
              parent: {
                route_name: "Customers",
                route_link: "",
                route_icon: "customer",
              },
              children: [],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
