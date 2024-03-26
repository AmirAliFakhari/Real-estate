function HeaderSlide() {
  return (
    <div className="relative">
      <img
        src="src\assets\imgs\unsplash_hCU4fimRW-c.svg"
        alt="Background"
        className="h-auto w-full "
      />
      <div className="absolute left-[51%] top-[17%]  ">
        <div className="-translate-y-1/12 flex w-screen -translate-x-1/2 flex-col items-center justify-start gap-2 ">
          <span className="text-3xl font-bold text-white">
            سقفینو؛ سقفی برای همه
          </span>
          <span className="hidden text-center text-xl text-white sm:flex">
            آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید
          </span>
        </div>
        <div className="absolute  top-[200%]">
          <div className="-translate-y-1/12  flex w-screen  -translate-x-1/2 flex-col items-center justify-start gap-2 ">
            <div className="relative">
              <input
                type="text"
                placeholder="کجا می خوای بری!"
                className="w-80 rounded-lg border border-stone-100 bg-slate-50 py-3 pl-4  sm:w-[25rem]"
              />
              <img
                className="absolute inset-y-0 left-0 ml-1 mr-0 mt-[13px]"
                src="src\assets\icons\search-normal.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSlide;
