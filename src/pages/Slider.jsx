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

        <img className="w-screen " src={`/src/assets/imgs/${src}`} />
      </div>
    </>
  );
}

export default Slider;
