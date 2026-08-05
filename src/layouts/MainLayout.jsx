import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

function MainLayout() {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
