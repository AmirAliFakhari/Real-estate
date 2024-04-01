import { useLocation, useParams } from "react-router-dom";
import ShowHomeIcon from "../../components/ShowHomeIcon";
import ShowHomeRow from "../../components/ShowHomeRow";

function ShowHouses() {
  const { image_id } = useParams();
  const location = useLocation();
  const state = location.state;
  console.log(state.number_floors);
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
        <ShowHomeRow state={state.mortgage} title="ودیعه" />
      </div>
    </>
  );
}

export default ShowHouses;
