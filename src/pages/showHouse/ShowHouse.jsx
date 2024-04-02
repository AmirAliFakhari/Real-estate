import { Link, useLocation, useParams } from "react-router-dom";
import ShowHomeRow from "../../components/ShowHomeRow";
import Features from "../../partials/house-ad/Features";
import ExplainRow from "../../partials/house-ad/Explain";
import MapUniqueAd from "../../partials/house-ad/MapUniqueAd";
import getHour from "../../utils/getHour";
import useRelatedRegHouse from "./useRelatedRegHouse";
import HomeCart from "../../partials/houses/HouseCart";
import ShowHomeIconRow from "../../components/ShowHomeIconRow";

function ShowHouses() {
  const { image_id } = useParams();
  const location = useLocation();
  const state = location.state;

  const { data, isLoading } = useRelatedRegHouse(
    state.rent,
    state.state,
    state.city,
    state.area,
  );

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
        <div className="grid w-full grid-flow-row items-center justify-center xl:grid-cols-2">
          <div>
            <p className="mt-5 flex items-center justify-start ps-10 text-gray-500">
              رهن و اجاره آپارتمان در{state.city}
            </p>
            <p className="mt-5 flex items-center justify-start ps-10 font-bold text-black">
              {state.area} | {state.state} | {state.street}
            </p>
            <div className="mt-2 flex  flex-wrap gap-1 px-5 sm:gap-2 sm:ps-10">
              {
                <>
                  <ShowHomeIconRow state={state} />
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
            <ExplainRow />
          </div>
          <div className="z-0 mt-10 flex w-full justify-center xl:w-auto">
            <MapUniqueAd
              state={state}
              height="70vh"
              width="70%"
              long={state.long}
              lat={state.lat}
            />
          </div>
        </div>
        <div className="mt-5 ps-10">
          <span>زمان ثبت آگهی: {getHour(state.time)} ساعت پیش</span>
        </div>
        <div className=" mt-5">
          <span className="ps-10 font-bold">آگهی های مرتبط</span>
          <div className="mx-auto    mt-10 flex flex-wrap items-baseline justify-center gap-10 md:justify-start xl:w-[78rem] ">
            {!isLoading
              ? data?.map((data) => (
                  <HomeCart
                    time={data.created_at}
                    key={data.id}
                    image_id={data.image_id}
                    monthPrice={data.rent}
                    mortgage={data.mortgage}
                    state={data.state}
                    street={data.street}
                    title={data.name}
                    area={data.area}
                    city={data.city}
                    room={data.room}
                    number_floors={data.number_floors}
                    rent={data.rent}
                    parking={data.parking}
                    basement={data.basement}
                    Floor_Material={data.Floor_Material}
                    WC_Type={data.WC_Type}
                    Cooling_System={data.Cooling_System}
                    Heating_System={data.Heating_System}
                    elevator={data.elevator}
                    WC={data.WC}
                    long={data.long}
                    lat={data.lat}
                  />
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowHouses;
