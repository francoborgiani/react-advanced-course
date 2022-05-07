import { NavLink } from "react-router-dom";
import { Route } from "../../routes/routes"

export const NavLinkComponent = (props: Route) => {
  return (
    <li>
      <NavLink
        to={props.to}
        className={({ isActive }) => (isActive && props.askIsActive ? "nav-active" : "")}
      >
        {props.name}
      </NavLink>
    </li>
  );
};
