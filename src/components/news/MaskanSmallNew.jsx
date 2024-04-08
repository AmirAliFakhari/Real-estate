import { Link, ScrollRestoration } from "react-router-dom";
import split from "../../utils/splitImgURL";

function MaskanSmallNew({ time, subtitle, img }) {
  const idNews = split(img);

  return (
    <Link to={`/new/${idNews}`}>
      <div className="flex flex-col justify-between rounded-lg border  border-gray-200 p-1">
        <img className="h-52 rounded-t-lg object-cover" src={img} alt="" />
        <span className="mt-4 w-fit rounded-md bg-slate-100 p-1 px-2  text-xs sm:text-base">
          {time}
        </span>
        <span className=" overflow-hidden text-ellipsis whitespace-nowrap  break-words  px-2  ">
          {subtitle}
        </span>
      </div>
    </Link>
  );
}

export default MaskanSmallNew;
