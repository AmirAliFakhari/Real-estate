import Introduction from "../partials/Introduction/Introduction";
import About from "../partials/about/About";
import SwiperSliders from "../partials/houses/SwiperSliders";
import LastNews from "../partials/news/LastNews";
import FooterPage from "../partials/footer/Footer";
import HeaderSlide from "../partials/headerSlide/HeaderSlide";

export default function Layout() {
  return (
    <>
      <HeaderSlide src="slidephoto.svg" />
      <Introduction />
      <SwiperSliders />
      <About />
      <LastNews />
      <FooterPage />
    </>
  );
}
