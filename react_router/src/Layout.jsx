import React from "react";
import Header from "./Componets/Header/Header";
import Footer from "./Componets/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      {/* outlet dene se top ki 2 chije same rhti h aur bich ki chije user ke acording change hoti rhti h  */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
