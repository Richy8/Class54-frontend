const authRoutes = [
  {
    path: "/login",
    alias: "/",
    component: () =>
      import(/* webpackChunkName: "AuthBuild" */ "@/layouts/AuthBuild"),
    children: [
      {
        path: "",
        name: "Class54Login",
        component: () =>
          import(/* webpackChunkName: "authRoute" */ "@/pages/authPages/Login"),
        meta: {
          guest: true,
        },
      },

      {
        path: "/signup",
        name: "Class54Signup",
        component: () =>
          import(
            /* webpackChunkName: "authRoute" */ "@/pages/authPages/Signup"
          ),
        meta: {
          guest: true,
        },
      },

      {
        path: "/password-request",
        name: "Class54PasswordRequest",
        component: () =>
          import(
            /* webpackChunkName: "authRoute" */ "@/pages/authPages/RequestPassword"
          ),
        meta: {
          guest: true,
        },
      },

      {
        path: "/password-reset",
        name: "Class54PasswordReset",
        component: () =>
          import(
            /* webpackChunkName: "authRoute" */ "@/pages/authPages/ResetPassword"
          ),
        meta: {
          guest: true,
        },
      },
    ],
  },
];

export default authRoutes;
