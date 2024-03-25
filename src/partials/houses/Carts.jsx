import { Link } from "react-router-dom";
import HomeCart from "./HouseCart";
import "swiper/css/navigation";
import "swiper/css";
import useRegisterHouse from "../../pages/RegisterHouse/useRegisterHouse";
// import Spinner from "../../features/Spinner";
// import useLastHouse from "./useLastHouse";

function Carts() {
  const { getLastRegData } = useRegisterHouse();

  return (
    <>
      <div className="mt-16 flex w-full   flex-col items-center  ">
        <div className="mb-4 flex w-[85%] justify-between">
          <p className="font-semibold "> جدیدترین خانه‌های اجاره‌ای تهران </p>

          <Link to="/all-hpmes" className="text-gray-700 ">
            مشاهده همه
          </Link>
        </div>
      </div>

      <div className="flex    flex-wrap items-baseline justify-center gap-5 ">
        {getLastRegData?.map((data) => (
          <HomeCart
            time={data.created_at}
            key={data.id}
            image_id={data.image_id}
            monthPrice={data.rent}
            mortgage={data.mortgage}
            state={data.state}
            street={data.street}
            title={data.grouping}
            area={data.area}
          />
        ))}
      </div>
    </>
  );
}

export default Carts;
