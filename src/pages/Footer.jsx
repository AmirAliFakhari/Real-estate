import { useState, useEffect } from "react";

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

  // console.log(showFooter);

  return (
    <footer
      className={`fixed bottom-0 left-0 z-20  flex w-full flex-col justify-center border-t  border-gray-200 bg-white  p-4 shadow duration-500  ease-in-out  md:flex   md:flex-row md:items-center md:justify-between md:p-6 ${showFooter ? " opacity-100" : " hidden opacity-0"}`}
    >
      <ul
        className={`mt-3 hidden flex-wrap items-center justify-center   text-sm font-medium text-gray-500  sm:mt-0 md:flex    ${showFooter ? "" : "hidden"}`}
      >
        <li>
          <a href="#" className="me-4 hover:underline md:me-6">
            اجاره
          </a>
        </li>
        <li>
          <a href="#" className="me-4 hover:underline md:me-6">
            خرید
          </a>
        </li>
        <li>
          <a href="#" className="me-4 hover:underline md:me-6">
            املاک و مستغلات
          </a>
        </li>
        <li>
          <a href="#" className="me-4 hover:underline md:me-6">
            مشاورین و املاک
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            اخبار روز
          </a>
        </li>
      </ul>
      <span
        className={` text-center text-sm text-gray-500 duration-500 ease-in-out dark:text-gray-400  ${showFooter ? "" : "hidden"}`}
      >
        تمامی حقوق متعلق به بهترین برنامه نویس جهان می باشد
      </span>
    </footer>
  );
}
