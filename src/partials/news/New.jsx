import { Link } from "react-router-dom";
import split from "../../utils/splitImgURL";

function New({ title, text, img }) {
  const idNews = split(img);

  return (
    <>
      <Link to={`eachNew/${idNews}`}>
        <div className="flex w-[15rem] flex-col  items-center justify-center gap-2 rounded-lg   border border-slate-200 pb-5">
          <img
            className="h-[15rem] rounded-t-lg object-cover "
            src={img}
            alt=""
          />
          <div className=" w-[90%] break-words  text-justify  ">
            <h2 className="  font-semibold ">{title}</h2>
          </div>
        </div>
      </Link>
    </>
  );
}

export default New;
