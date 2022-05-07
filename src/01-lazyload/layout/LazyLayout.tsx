import { Route, Routes, NavLink, Navigate } from "react-router-dom";

import "./LazyLayout.scss";

import { routes } from "./routesLazyLayout";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout</h1>

      <ul className="nav">
        {routes.map((route) => (
          <li className="nav-item" key={route.path}>
            <NavLink className={
              ({ isActive }) => isActive ? "active" : ""
            } to={route.to}>{route.name}</NavLink>
          </li>
        ))}
      </ul>

      <Routes>
        {
          routes.map(({Component, path}) => (
            <Route path={path} element={<Component/>} />
          ))
        }

        <Route path="*" element={<Navigate to={routes[0].to} replace />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
