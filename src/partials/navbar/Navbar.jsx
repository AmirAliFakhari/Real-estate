import { Link } from "react-router-dom";
import LinkComp from "../../components/LinkComp";

function Navbar() {
  return (
    <nav className=" fixed z-30 w-[100%] border border-b-stone-300  bg-white md:absolute md:flex">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-5 p-4 text-sm">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link to="/">
            <img
              src="https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/icons/logo.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9sb2dvLnN2ZyIsImlhdCI6MTcxMDE1NTg4NywiZXhwIjoxNzQxNjkxODg3fQ.Ovugk1dFwUY-m9Mh2-pZJDHOONGzmAPngfN1Di46YNQ&t=2024-03-11T11%3A18%3A04.574Z"
              className="h-8"
              alt="Flowbite Logo"
            />
          </Link>
          <span className="hidden self-center whitespace-nowrap text-xl font-semibold dark:text-white  lg:flex">
            مشاور املاک
          </span>
        </a>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <Link
            to="/signIn"
            type="button"
            className="focus:ring-red-30 hidden rounded-lg   px-3 py-2 text-center text-sm font-medium text-gray-800 sm:flex "
          >
            ورود
          </Link>
          <Link
            to="/register"
            type="button"
            className="focus:ring-red-30 hidden w-[5.2rem] rounded-lg border  border-red-500 px-3 py-2 text-center
             text-sm font-medium text-red-500 sm:flex "
          >
            ثبت آگهی
          </Link>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  md:hidden"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">منو</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-cta"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-6 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
            <li className="flex md:hidden">
              <LinkComp
                className="flex md:hidden "
                title="اجاره"
                src="search-normal"
              />
            </li>
            <li>
              <LinkComp title="اجاره" src="key" />
            </li>
            <li>
              <LinkComp title="خرید" src="key" />
            </li>
            <li>
              <LinkComp title="املاک و مستغلات" src="house-2" />
            </li>
            <li>
              <LinkComp title="مشاورین و املاک" src="people" />
            </li>
            <li>
              <LinkComp title="اخبار روز" src="receipt-2" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
