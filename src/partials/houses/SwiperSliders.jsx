import { Link } from "react-router-dom";
import HomeCart from "./HomeCart";
import "swiper/css/navigation";
import "swiper/css";
import useHouse from "./useHouse";
import Spinner from "../../features/Spinner";

function SwiperSliders() {
  const { data, isLoading } = useHouse();
  if (isLoading || !data) {
    return <Spinner />;
  }
  // const { created_at, rent_price, time, mortgage_price } = data;
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

      <div className="flex flex-wrap items-center justify-center gap-5">
        {data.map((data) => (
          <HomeCart
            time={data.created_at}
            key={data.title}
            homeImg={data.img}
            monthPrice={data.rent_price}
            mortgage={data.mortgage_price}
            subTitle={data.subtitle}
            title={data.grouping}
          />
        ))}
      </div>
    </>
  );
}

export default SwiperSliders;
