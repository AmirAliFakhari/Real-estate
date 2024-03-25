import Introduction from "../partials/Introduction/Introduction";
import About from "../partials/about/About";
import LastNews from "../partials/news/LastNews";
import FooterPage from "../partials/footer/Footer";
import HeaderSlide from "../partials/headerSlide/HeaderSlide";
import Carts from "../partials/houses/Carts";
import MapAd from "../partials/house-ad/MapAd";

export default function Layout() {
  return (
    <div className="relative top-[69.6px] ">
      <HeaderSlide src="slidephoto.svg" />
      <Carts />
      <Introduction />
      <LastNews />
      <About />
      {/* <FooterPage /> */}
    </div>
  );
}
