import { lazy } from "react";

export const routes = [
  {
    to: "lazy1",
    path: "lazy1",
    Component: lazy(() => import("../pages/Lazy1")),
    name: "Lazy 1"
  },
  {
    to: "lazy2",
    path: "lazy2",
    Component: lazy(() => import("../pages/Lazy2")),
    name: "Lazy 2"
  },
  {
    to: "lazy3",
    path: "lazy3",
    Component: lazy(() => import("../pages/Lazy3")),
    name: "Lazy 3"
  }
]