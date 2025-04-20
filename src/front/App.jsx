import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <ScrollToTop>
      {!isAuthPage && <Navbar />}
      <div className={isAuthPage ? "" : "container py-4"}>
        <Outlet />
      </div>
      {!isAuthPage && <Footer />}
    </ScrollToTop>
  );
};

export default App;
