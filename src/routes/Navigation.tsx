import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { NavLinkComponent } from "../01-lazyload/components/NavLinkComponent";
import { routes } from "./routes";

import { Loader } from "../01-lazyload/components/Loader";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map((props) => (
                <NavLinkComponent key={props.path} {...props} />
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ Component, path }) => (
              <Route 
                key={path} 
                path={path} 
                element={<Component />} 
              />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
