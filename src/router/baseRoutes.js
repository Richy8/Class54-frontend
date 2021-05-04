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
    ],
  },
];

export default baseRoutes;
