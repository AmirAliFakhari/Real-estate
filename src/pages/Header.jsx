function Slider({ src }) {
  return (
    <>
      <div className="relative text-Gray-3-EDEDED">
        <p className="absolute flex flex-col gap-4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl">
          سقفینو؛ سقفی برای همه
          <span className="text-base">
            آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید
          </span>
        </p>
        <div className="bg-white absolute flex flex-col items-start  w-auto  h-24 rounded-lg top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex">
            <button className="text-Gray-10-505050 px-40 my-2 border-b-2 border-red-500">
              اجاره
            </button>
            <button className="text-Gray-10-505050 px-40  my-2">خرید</button>
          </div>
          <div className="flex w-full justify-end text-black  ">
            <input
              className="w-full"
              type="text"
              placeholder="کدوم شهر میخوای مستقر بشی!"
            />
            <img className="w-fit" src="\src\assets\icons\search-normal.svg" />
          </div>
        </div>

        <img className="w-screen " src={`/src/assets/imgs/${src}`} />
      </div>
    </>
  );
}

export default Slider;
