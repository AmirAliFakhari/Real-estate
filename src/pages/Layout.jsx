import FooterPage from "./Footer";
import SwiperSliders from "./homes/SwiperSliders";
import AboutLayout from "./Introduction/Introduction";
import LastNews from "./news/LastNews";

export default function Layout() {
  return (
    <>
      <AboutLayout />
      <SwiperSliders />
      <LastNews />
      <FooterPage />
    </>
  );
}
