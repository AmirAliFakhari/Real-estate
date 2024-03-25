function IntroCart({ img, title, text, buttonText }) {
  return (
    <div className="flex w-56 flex-col items-center justify-center gap-5 rounded-md  bg-stone-50 p-6 text-center  drop-shadow-2xl md:w-[14rem] lg:w-[20rem]">
      <img className="w-fit" src={img} alt="" />
      <p className="font-semibold">{title}</p>
      <span className="hidden text-justify text-[15px] font-extralight lg:flex ">
        {text}
      </span>
      <button className="w-full rounded-md border bg-red-700 py-2 text-white">
        {buttonText}
      </button>
    </div>
  );
}

export default IntroCart;
