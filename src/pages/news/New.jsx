import { Link } from "react-router-dom";

function New({ title, text, img }) {
  return (
    <>
      <Link to="/app">
        <div className="flex flex-col  items-center justify-center gap-2 rounded-lg  border border-stone-600 bg-stone-50 pb-5  drop-shadow-2xl ">
          <img className="w-full rounded-t-lg " src={img} alt="" />
          <div className="text-center">
            <h2 className=" break-words font-semibold ">{title}</h2>
            <span className=" break-words text-slate-700">{text}</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default New;
