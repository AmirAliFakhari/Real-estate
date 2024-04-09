import { Link } from "react-router-dom";
import split from "../../utils/splitImgURL";

function RelatedNews({ time, title, img }) {
  const idNews = split(img);
  return (
    <Link to={`/new/${idNews}`}>
      <div className="mx-2 mt-5 flex flex-col items-center justify-center rounded-lg bg-white ">
        <img className="w-1/2 object-cover  sm:w-fit" src={img} alt="" />
        <span className="w-fit rounded-md bg-red-100 p-1 text-sm">{time}</span>
        <p>{title}</p>
      </div>
    </Link>
  );
}

export default RelatedNews;
