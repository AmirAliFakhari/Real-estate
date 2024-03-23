import DropDown from "../../components/DropDown";
import Filter from "../../components/Filter";
import dropDownData from "../../services/data/dropDownData";
function Houses() {
  return (
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
        <div className="  flex flex-wrap justify-between gap-2 ">
          <div className="hidden justify-center gap-2 sm:flex sm:flex-grow">
            {dropDownData.data.map((data, index) => (
              <DropDown key={index} title={data.title} items={data.items} />
            ))}
          </div>
          <div className="flex  flex-grow justify-start px-5">
            <Filter title="فیلتر" />
            <Filter title="جدیدترین" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Houses;
