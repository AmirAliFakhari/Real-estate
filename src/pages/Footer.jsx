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

  console.log(showFooter);
  return (
    <footer
      className={`fixed bottom-0 left-0 z-20 w-full animate-bounce border-t border-gray-200 bg-white p-4 shadow transition-opacity duration-500 ease-in-out  md:flex md:items-center md:justify-between md:p-6 ${showFooter ? "opacity-100" : "opacity-0"}`}
    >
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        تمامی حقوق متعلق به بهترین برنامه نویس جهان می باشد
      </span>
      <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
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
          <a href="#" className="hover:underline">
            اخبار
          </a>
        </li>
      </ul>
    </footer>
  );
}
