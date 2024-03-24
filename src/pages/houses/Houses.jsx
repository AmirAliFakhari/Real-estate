import { useState } from "react";
import DropDown from "../../components/DropDown";
import dropDownData from "../../services/data/dropDownData";
import Advertisements from "../../partials/house-ad/Advertisements";
function Houses() {
  const [rangeValue, setRangeValue] = useState(500);

  function changeRange(e) {
    setRangeValue(e);
  }

  return (
    <>
      <div className="relative left-0 top-[80px]">
        <div className="flex  flex-col gap-5">
          <form className="flex justify-center px-5">
            <label className="sr-only mb-2 text-sm font-medium text-gray-900 ">
              کجا
            </label>
            <div className="relative w-full sm:w-1/2 ">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                placeholder="شهر مورد نظر را اضافه کنید"
                required
              />
              <button
                type="submit"
                className="absolute bottom-2.5 end-2.5 rounded-lg border border-red-500 bg-red-700 px-2 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-red-300 sm:bg-inherit sm:text-black "
              >
                جست و جو
              </button>
            </div>
          </form>
          <div className="  flex flex-wrap justify-between gap-2 px-5 ">
            <div className="hidden justify-center gap-2 sm:flex sm:flex-grow">
              {dropDownData.data.map((data, index) => (
                <DropDown
                  key={index}
                  title={data.title}
                  items={data?.items}
                  type={data.type}
                />
              ))}
            </div>
            <div className="flex max-h-10 flex-grow flex-col justify-start gap-2  rounded-lg border border-slate-200   sm:justify-center ">
              <span>از {rangeValue} میلیون</span>
              <input
                onChange={(e) => changeRange(e.target.value)}
                type="range"
                defaultValue="500"
                min="100"
                max="1500"
                className="h-2  cursor-pointer appearance-none rounded-lg bg-gray-200 "
              />
            </div>
            <div className="relative sm:hidden">
              <img
                className="absolute top-[10px] px-1 sm:top-3 sm:w-7"
                src="src\assets\icons\filter-search.svg"
                alt=""
              />
              <button
                type="button"
                className="  w-36 rounded-lg  border border-gray-200 py-2.5  text-sm font-medium text-black hover:bg-red-600 focus:outline-none "
              >
                <span className=" flex  justify-center px-1">فیلتر</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="  top-56 mt-10   px-5">
        <Advertisements />
      </div>
    </>
  );
}

export default Houses;
