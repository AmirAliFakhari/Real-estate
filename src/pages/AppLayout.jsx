import { Outlet } from "react-router-dom";
import FooterPage from "../partials/footer/Footer";
import Navbar from "../partials/navbar/Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default AppLayout;
