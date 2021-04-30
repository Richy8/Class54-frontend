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
        path: "/years/all-years",
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
        path: "/years/create-years",
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
        path: "/topics/all-topics",
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
        path: "/topics/create-topics",
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
    ],
  },
];

export default baseRoutes;
