import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  let login = true;
  return (
    <>
      {login ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Layout;
