import { useLocation } from "react-router-dom";
import HomeCart from "../partials/houses/HouseCart";

function UserRealtor() {
  const location = useLocation();
  const state = location.state;

  return (
    <div className="relative left-0 top-[80px]">
      <div className="relative ">
        <div>
          <img className="w-full" src="src\assets\imgs\Banner.png" alt="" />
          <img
            className="absolute bottom-[-10px] right-10 h-32 w-32 sm:h-44 sm:w-44"
            src="src\assets\imgs\Photo.svg"
            alt=""
          />
          <span className="absolute bottom-11 right-36 w-fit rounded-lg bg-red-500 p-2 text-xs text-white sm:right-44 sm:text-base">
            شماره تماس : 09130748001
          </span>
          <span className="absolute bottom-0 right-36 rounded-lg bg-red-500 p-2 text-white sm:right-44">
            امیرعلی فخاری
          </span>
        </div>
      </div>
      <div className="relative mt-10  ps-5 ">
        <span className="  text-lg font-bold ">آگهی های امیرعلی فخاری</span>
        <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-stretch">
          {state.realtorAdds?.map((data) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserRealtor;
