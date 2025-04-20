import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

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
