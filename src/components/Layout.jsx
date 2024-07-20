import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar/AppBar.jsx";
import Container from "./Container/Container.jsx";

import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={css.page}>
      <AppBar />
      <main className={css.main}>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <footer className={css.footer}>Trailers</footer>
    </div>
  );
};

export default Layout;
