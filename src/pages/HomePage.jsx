// import { Outlet } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Slider from "./Slider";

function HomePage() {
  return (
    <>
      <Navbar />
      <Slider src="slidephoto.svg" />
    </>
  );
}

export default HomePage;
