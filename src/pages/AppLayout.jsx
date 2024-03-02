import { Outlet } from "react-router-dom";
import TopNavbar from "./Navbar";
import FooterPage from "./Footer";

function AppLayout() {
  return (
    <>
      <TopNavbar />
      <Outlet />
      <FooterPage />
    </>
  );
}

export default AppLayout;
