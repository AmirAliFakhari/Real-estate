import Introduction from "../partials/Introduction/Introduction";
import About from "../partials/about/About";
import LastNews from "../partials/news/LastNews";
import HeaderSlide from "../partials/headerSlide/HeaderSlide";
import Carts from "../partials/houses/Carts";

export default function Layout() {
  return (
    <div className="relative top-[69.6px] ">
      <HeaderSlide  />
      <Carts />
      <Introduction />
      <LastNews />
      <About />
    </div>
  );
}
