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
        },
      },
    ],
  },
];

export default baseRoutes;
