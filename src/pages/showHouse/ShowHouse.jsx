import { Link, useLocation, useParams } from "react-router-dom";
import ShowHomeIcon from "../../components/ShowHomeIcon";
import ShowHomeRow from "../../components/ShowHomeRow";
import Features from "../../partials/house-ad/Features";

function ShowHouses() {
  const { image_id } = useParams();
  const location = useLocation();
  const state = location.state;
  return (
    <>
      <div className="relative left-0 top-[80px]">
        <div className="flex items-center justify-center ">
          <img
            className="h-[20rem] w-fit  rounded-lg object-contain sm:h-[34rem] sm:w-[37rem]  sm:object-none"
            src={`https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/public/apartments/${image_id}-registerHouse.png`}
            alt=""
          />
        </div>
        <p className="mt-5 flex items-center justify-start ps-10 text-gray-500">
          رهن و اجاره آپارتمان در{state.city}
        </p>
        <p className="mt-5 flex items-center justify-start ps-10 font-bold text-black">
          {state.area} | {state.state} | {state.street}
        </p>
        <div className="mt-2 flex  flex-wrap gap-1 px-5 sm:gap-2 sm:ps-10">
          {
            <>
              <ShowHomeIcon
                src="src\assets\icons\ruler&pen.svg"
                title="متراژ"
                unit="متر"
                state={state.area}
              />
              <ShowHomeIcon
                src="src\assets\icons\lamp.svg"
                title="اتاق"
                unit="خواب"
                state={state.room}
              />
              <ShowHomeIcon
                src="src\assets\icons\buliding.svg"
                title="طبقه"
                unit="تا"
                state={state.number_floors}
              />
            </>
          }
        </div>
        <ShowHomeRow state={state.mortgage} title="ودیعه" />
        <ShowHomeRow state={state.rent} title="اجاره ماهیانه" />
        <div className="mx-5 mt-2 flex justify-between rounded-md border border-gray-200 px-2 font-extralight sm:ms-10 sm:w-[31rem]">
          <div className="flex flex-col gap-2">
            <span>ساعاتی پیش تهران</span>
            <span>
              شناسه آگهی:
              {image_id}
            </span>
          </div>
          <Link className="">
            <span className="flex items-center justify-center text-left text-red-500">
              گزارش تخلف آگهی
            </span>
          </Link>
        </div>
        <Features state={state} title="امکانات" />
      </div>
    </>
  );
}

export default ShowHouses;
