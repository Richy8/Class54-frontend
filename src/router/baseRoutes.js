const baseRoutes = [
  {
    path: "/dashboard",
    component: () =>
      import(/* webpackChunkName: "BaseBuild" */ "@/layouts/BaseBuild"),
    children: [
      {
        path: "",
        name: "Class54Dashboard",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/Dashboard"
          ),
        meta: {
          requiresAuth: true,
          title: "Dashboard",
        },
      },

      {
        path: "profile/user-profile",
        name: "Class54AllProfile",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/settingsPages/Profile"
          ),
        meta: {
          requiresAuth: true,
          title: "Profile",
        },
      },

      {
        path: "/year/all-year",
        name: "Class54AllYears",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/AllYears"
          ),
        meta: {
          requiresAuth: true,
          title: "Years",
        },
      },

      {
        path: "/year/create-year",
        name: "Class54CreateYears",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/CreateYears"
          ),
        meta: {
          requiresAuth: true,
          title: "Years",
        },
      },

      {
        path: "/topic/all-topic",
        name: "Class54AllTopics",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/AllTopics"
          ),
        meta: {
          requiresAuth: true,
          title: "Topics",
        },
      },

      {
        path: "/topic/create-topic",
        name: "Class54CreateTopics",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/CreateTopics"
          ),
        meta: {
          requiresAuth: true,
          title: "Topics",
        },
      },

      {
        path: "/faculty/all-faculty",
        name: "Class54AllFaculty",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/AllFaculty"
          ),
        meta: {
          requiresAuth: true,
          title: "Faculties",
        },
      },

      {
        path: "/faculty/create-faculty",
        name: "Class54CreateFaculty",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/CreateFaculty"
          ),
        meta: {
          requiresAuth: true,
          title: "Faculties",
        },
      },

      {
        path: "/category/all-category",
        name: "Class54AllCategory",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/AllCategory"
          ),
        meta: {
          requiresAuth: true,
          title: "Categories",
        },
      },

      {
        path: "/category/create-category",
        name: "Class54CreateCategory",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/CreateCategory"
          ),
        meta: {
          requiresAuth: true,
          title: "Categories",
        },
      },

      {
        path: "/subject/all-subject",
        name: "Class54AllSubject",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/AllSubject"
          ),
        meta: {
          requiresAuth: true,
          title: "Subjects",
        },
      },

      {
        path: "/subject/create-subject",
        name: "Class54CreateSubject",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/CreateSubject"
          ),
        meta: {
          requiresAuth: true,
          title: "Subjects",
        },
      },

      {
        path: "/country/all-country",
        name: "Class54AllCountry",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/AllCountry"
          ),
        meta: {
          requiresAuth: true,
          title: "Countries",
        },
      },

      {
        path: "/country/create-country",
        name: "Class54CreateCountry",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/CreateCountry"
          ),
        meta: {
          requiresAuth: true,
          title: "Countries",
        },
      },

      {
        path: "/school/all-school",
        name: "Class54AllSchool",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/AllSchool"
          ),
        meta: {
          requiresAuth: true,
          title: "Schools",
        },
      },

      {
        path: "/school/create-school",
        name: "Class54CreateSchool",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/CreateSchool"
          ),
        meta: {
          requiresAuth: true,
          title: "Schools",
        },
      },

      {
        path: "/exam/all-exam",
        name: "Class54AllExam",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/AllExam"
          ),
        meta: {
          requiresAuth: true,
          title: "Exams",
        },
      },

      {
        path: "/exam/create-exam",
        name: "Class54CreateExam",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/generalPages/CreateExam"
          ),
        meta: {
          requiresAuth: true,
          title: "Exams",
        },
      },

      {
        path: "/novel/all-novel",
        name: "Class54AllNovel",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/novelPages/AllNovel"
          ),
        meta: {
          requiresAuth: true,
          title: "Novels",
        },
      },

      {
        path: "/novel/create-novel",
        name: "Class54CreateNovel",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/novelPages/CreateNovel"
          ),
        meta: {
          requiresAuth: true,
          title: "Novels",
        },
      },

      {
        path: "/novel/add-novel-chapter",
        name: "Class54AddNovelChapter",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/novelPages/AddNovelChapter"
          ),
        meta: {
          requiresAuth: true,
          title: "Novels",
        },
      },

      {
        path: "/study-notes/all-study-notes",
        name: "Class54AllStudyNotes",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/novelPages/AllStudyNotes"
          ),
        meta: {
          requiresAuth: true,
          title: "Study Notes",
        },
      },

      {
        path: "/study-notes/create-study-notes",
        name: "Class54CreateStudyNotes",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/novelPages/CreateStudyNotes"
          ),
        meta: {
          requiresAuth: true,
          title: "Study Notes",
        },
      },

      {
        path: "/user/all-user",
        name: "Class54AllUsers",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/settingsPages/AllUsers"
          ),
        meta: {
          requiresAuth: true,
          title: "Users",
        },
      },

      {
        path: "/user/create-user",
        name: "Class54CreateUsers",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/settingsPages/CreateUsers"
          ),
        meta: {
          requiresAuth: true,
          title: "Users",
        },
      },

      {
        path: "/notification/all-notification",
        name: "Class54AllNotification",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/settingsPages/AllNotification"
          ),
        meta: {
          requiresAuth: true,
          title: "Notifications",
        },
      },

      {
        path: "/notification/create-notification",
        name: "Class54CreateNotification",
        component: () =>
          import(
            /* webpackChunkName: "baseRoute" */ "@/pages/settingsPages/CreateNotification"
          ),
        meta: {
          requiresAuth: true,
          title: "Notifications",
        },
      },
    ],
  },
];

export default baseRoutes;
