import { Link } from "react-router-dom";
import split from "../../utils/splitImgURL";

function MaskanSmallNew({ time, subtitle, img }) {
  const idNews = split(img);

  return (
    <Link to={`/new/${idNews}`}>
      <div className="flex flex-col justify-between rounded-lg border  border-gray-200">
        <img
          className="h-56 rounded-t-lg object-cover"
          src="src\assets\imgs\Photo-news.svg"
          alt=""
        />
        <span className="w-fit rounded-md bg-slate-100 p-1 px-2  text-xs sm:text-base">
          {time}
        </span>
        <span className="px-2 text-justify  text-xs  sm:text-base">
          {subtitle}
        </span>
      </div>
    </Link>
  );
}

export default MaskanSmallNew;
