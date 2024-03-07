import { useState, useEffect } from "react";
import LinkComp from "../../components/LinkComp";
import { Link } from "react-router-dom";

export default function FooterPage() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 1;
      setShowFooter(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={`fixed bottom-0 left-0 z-20  flex w-full flex-col justify-center border-t  border-gray-200 bg-white  p-4 shadow duration-500  ease-in-out  md:flex   md:flex-row md:items-center md:justify-between md:p-6 ${showFooter ? " opacity-100" : " hidden opacity-0"}`}
    >
      <ul
        className={`mt-3 hidden flex-wrap items-center justify-center gap-5   text-sm font-medium text-gray-500  sm:mt-0 md:flex    ${showFooter ? "" : "hidden"}`}
      >
        <LinkComp to="/" title="اجاره" />
        <LinkComp to="/" title="خرید" />
        <LinkComp to="/" title="املاک و مستغلات" />
        <LinkComp to="/" title="مشاورین املاک" />
        <LinkComp to="/" title="اخبار روز" />
      </ul>
      <div className="hidden gap-2 md:flex ">
        <Link
          to=""
          type="button"
          className="focus:ring-red-30 hidden rounded-lg   px-4 py-2 text-center text-sm font-medium text-gray-800 sm:flex "
        >
          ورود
        </Link>
        <Link
          to="/register"
          type="button"
          className="focus:ring-red-30 hidden rounded-lg border border-red-500   px-4 py-2 text-center text-sm font-medium text-red-500 sm:flex "
        >
          ثبت آگهی
        </Link>
      </div>
      <span className="flex justify-center md:hidden">
        هیچ خبری نیست ، فقط سلامتی
      </span>
    </footer>
  );
}
