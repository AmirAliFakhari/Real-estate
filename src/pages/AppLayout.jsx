import { Outlet } from "react-router-dom";
import Navbar from "../partials/navbar/Navbar";
import Footer from "../partials/footer/Footer";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
