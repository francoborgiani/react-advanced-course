import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

export interface Route {
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  exact: boolean;
  to: string;
  path: string;
  askIsActive?: boolean;
}

export const routes: Route[] = [
  {
    to: "/lazy-layout",
    path: "/lazy-layout/*",
    Component: lazy(() => import(/* webpackChunkName: "LazyLayout" */  "../01-lazyload/layout/LazyLayout")),
    exact: true,
    name: "Lazy Layout",
    askIsActive: true,
  },
  {
    to: "/normal-layout",
    path: "normal-layout",
    Component: lazy(() => import("../01-lazyload/layout/NormalLayout")),
    exact: true,
    name: "Normal Layout",
    askIsActive: true,
  },
];
