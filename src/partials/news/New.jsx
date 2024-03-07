import { Link } from "react-router-dom";

function New({ title, text, img }) {
  return (
    <>
      <Link to="/app">
        <div className="flex flex-col  items-center justify-center gap-2 rounded-lg border border-stone-600 pb-5 shadow-xl  shadow-slate-100 ">
          <img className="w-full rounded-t-lg " src={img} alt="" />
          <div className=" w-[90%] break-words  text-justify  ">
            <h2 className="  font-semibold ">{title}</h2>
            <span className="text-slate-700">{text}</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default New;
