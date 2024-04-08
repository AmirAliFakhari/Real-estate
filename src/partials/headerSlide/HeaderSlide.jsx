function HeaderSlide() {
  return (
    <div className="relative">
      <img
        src="src\assets\imgs\unsplash_hCU4fimRW-c.svg"
        alt="Background"
        className="h-auto w-full "
      />
      <div className="absolute left-[51%] top-24 sm:top-[17%]  ">
        <div className="-translate-y-1/12 flex w-screen -translate-x-1/2 flex-col items-center justify-start gap-2 ">
          <span className="text-3xl font-bold text-white">
            سقفینو؛ سقفی برای همه
          </span>
          <span className="mt-5 hidden text-center text-2xl text-white sm:flex">
            آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderSlide;
