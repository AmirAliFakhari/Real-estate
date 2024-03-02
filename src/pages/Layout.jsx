import About from "./about/About";
import FooterPage from "./Footer";
import HeaderSlide from "./HeaderSlide";
import SwiperSliders from "./homes/SwiperSliders";
import AboutLayout from "./Introduction/Introduction";
import LastNews from "./news/LastNews";

export default function Layout() {
  return (
    <>
      <HeaderSlide src="slidephoto.svg" />
      <AboutLayout />
      <SwiperSliders />
      <About />
      <LastNews />
      <FooterPage />
    </>
  );
}
