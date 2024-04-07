import { Link } from "react-router-dom";
import split from "../../utils/splitImgURL";

function MaskanBigNews({ time, title, subtitle, img }) {
  const idNews = split(img);
  return (
    <Link to={`/new/${idNews}`}>
      <div className=" flex h-fit flex-col gap-5 rounded-lg border border-gray-200">
        <img
          className="h-[30rem] rounded-lg object-cover "
          src="src\assets\imgs\Photo-news.svg"
          alt=""
        />
        <span className="w-fit rounded-md bg-slate-100 p-1 text-sm">
          {time}
        </span>
        <div className="flex flex-col ">
          <span className="text-xl font-bold">{title}</span>
          <span className="text-justify text-base ">{subtitle}</span>
        </div>
      </div>
    </Link>
  );
}

export default MaskanBigNews;
