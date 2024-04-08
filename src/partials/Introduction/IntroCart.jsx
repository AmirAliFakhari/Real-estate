import { Link } from "react-router-dom";

function IntroCart({ img, title, text, buttonText, link }) {
  return (
    <div className="flex w-56 flex-col items-center justify-center gap-5 rounded-md  bg-stone-50 p-6 text-center  drop-shadow-2xl md:w-[14rem] lg:w-[20rem]">
      <img className="w-fit" src={img} alt="" />
      <p className="font-semibold">{title}</p>
      <span className="hidden text-justify text-[15px] font-extralight lg:flex ">
        {text}
      </span>
      <Link
        to={link}
        className="w-full rounded-md border bg-red-700 py-2 text-white"
      >
        {buttonText}
      </Link>
    </div>
  );
}

export default IntroCart;
