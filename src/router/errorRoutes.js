const errorRoutes = [
  {
    path: "/500",
    component: () =>
      import(/* webpackChunkName: "AuthBuild" */ "@/layouts/ErrorBuild"),
    children: [
      {
        path: "",
        name: "ServerError",
        component: () =>
          import(/* webpackChunkName: "errorRoute" */ "@/pages/errorPages/500"),
        meta: {
          guest: true,
        },
      },

      {
        path: "/*",
        name: "NotFoundError",
        component: () =>
          import(/* webpackChunkName: "errorRoute" */ "@/pages/errorPages/404"),
        meta: {
          guest: true,
        },
      },
    ],
  },
];

export default errorRoutes;
