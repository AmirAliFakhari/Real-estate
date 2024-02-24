// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default HomePage;
