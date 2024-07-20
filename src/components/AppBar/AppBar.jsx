import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { PiVanThin } from "react-icons/pi";

import css from "./AppBar.module.css";
import Container from "../Container/Container";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AppBar = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.navigation}>
          <NavLink to="/" className={css.logoLink}>
            <PiVanThin className={css.logo} />
            Trailers
          </NavLink>

          <nav className={css.nav}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
            <NavLink to="catalog" className={buildLinkClass}>
              Catalog
            </NavLink>
            <NavLink to="favorite" className={buildLinkClass}>
              Favorite
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
