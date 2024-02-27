import HeaderSlide from "./HeaderSlide";
import Layout from "./Layout";
import TopNavbar from "./Navbar";

function HomePage() {
  return (
    <>
      <TopNavbar />
      <HeaderSlide src="slidephoto.svg" />
      <Layout />
    </>
  );
}

export default HomePage;
