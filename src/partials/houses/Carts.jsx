import { Link } from "react-router-dom";
import HomeCart from "./HouseCart";
import "swiper/css/navigation";
import "swiper/css";
import useRegisterHouse from "../../pages/RegisterHouse/useRegisterHouse";

function Carts() {
  const { getLastRegData } = useRegisterHouse();

  return (
    <>
      <div className="mt-16 flex w-full   flex-col items-center  ">
        <div className="mb-4 flex w-[85%] justify-between">
          <p className="font-semibold "> جدیدترین خانه‌های اجاره‌ای تهران </p>

          <Link to="houses" className="text-gray-700 ">
            مشاهده همه
          </Link>
        </div>
      </div>

      <div className="mx-auto    flex flex-wrap items-baseline justify-center gap-10 xl:w-[78rem] ">
        {getLastRegData?.map((data) => (
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
    </>
  );
}

export default Carts;
