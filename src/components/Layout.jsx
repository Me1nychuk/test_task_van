import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar/AppBar.jsx";
import Container from "./Container/Container.jsx";

import css from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <AppBar />
      <main className={css.main}>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
