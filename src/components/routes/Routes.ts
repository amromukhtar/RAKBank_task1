import { lazy } from "react";

const routes = [
  {
    key: "home",
    path: `/home`,
    component: lazy(() => import("../../view/home")),
    authority: [],
  },
];

export default routes;
