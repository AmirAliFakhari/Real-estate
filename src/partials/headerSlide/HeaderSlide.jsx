function HeaderSlide() {
  return (
    <div className="relative ">
      <img
        src="..\src\assets\imgs\slide.svg"
        alt="Background"
        className="h-auto w-full"
      />
      <div className="absolute inset-0 my-28 hidden flex-col  justify-start  gap-4 text-white sm:flex sm:items-center">
        <p className="md:text-4xlxl mb-4 text-5xl font-semibold md:font-bold">
          سقفینو؛ سقفی برای همه
        </p>
        <span className="flex text-xl font-light md:hidden md:text-2xl lg:flex">
          آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید
        </span>
      </div>
      <div className="absolute inset-0 mb-4   flex items-center justify-center sm:items-end md:mb-24">
        <form className="mx-auto max-w-md ">
          <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
            کجا؟
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <img
                className=""
                src="src\assets\icons\search-normal.svg"
                alt="ds"
              />
            </div>
            <input
              type="search"
              id="default-search"
              className="mb-7 block w-[19rem] rounded-lg border border-gray-300  bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:w-[22rem] md:w-[448px] "
              placeholder="کجا میخوای زندگی کنی؟"
              required
            />
            <button
              type="submit"
              className="absolute bottom-2.5 end-2.5 rounded-lg bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 "
            >
              جست و جو
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HeaderSlide;
