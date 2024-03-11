function HeaderSlide() {
  return (
    <div className="relative">
      <img
        src="https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MTAxNTY1MTcsImV4cCI6MTc0MTY5MjUxN30.2J32ZKLQV6Z5gDUsQAbb0xTYvEnFkui3XPmh4-KLLy8&t=2024-03-11T11%3A28%3A34.962Z"
        alt="Background"
        className="h-auto w-full "
      />
      <div className="absolute left-1/2 top-[17%]  ">
        <div className="-translate-y-1/12 flex w-screen -translate-x-1/2 flex-col items-center justify-start gap-2 ">
          <span className="text-3xl font-bold text-white">
            سقفینو؛ سقفی برای همه
          </span>
          <span className="hidden text-center text-xl text-white sm:flex">
            آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید
          </span>
        </div>
        <div className="absolute  top-[180%]">
          <div className="-translate-y-1/12  flex w-screen -translate-x-1/2 flex-col items-center justify-start gap-2 ">
            <div className="relative">
              <input
                type="text"
                placeholder="کجا می خوای بری!"
                className="w-80 rounded-lg border border-stone-700 bg-slate-50 pl-10  sm:w-96"
              />
              <img
                className="absolute inset-y-0 left-0 ml-1 mr-0 mt-2"
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
