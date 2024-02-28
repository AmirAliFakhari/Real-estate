function IntroCart({ img, title, text, buttonText }) {
  return (
    <div className="flex flex-col w-[18rem] md:w-[14rem] lg:w-[20rem] p-6 justify-center items-center text-center drop-shadow-2xl border border-gray-600 rounded-md  bg-stone-50 w-44 gap-5">
      <img className="w-fit" src={img} alt="" />
      <p className="font-semibold">{title}</p>
      <span className="text-[15px] hidden lg:flex text-justify font-extralight ">
        {text}
      </span>
      <button className="border bg-red-700 rounded-md w-full py-2 text-white">
        {buttonText}
      </button>
    </div>
  );
}

export default IntroCart;
