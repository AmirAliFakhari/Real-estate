import { Link } from "react-router-dom";
import HomeCart from "./HouseCart";
import "swiper/css/navigation";
import "swiper/css";
import "../../index.css";

import useRegisterHouse from "../../pages/RegisterHouse/useRegisterHouse";
import { useEffect, useRef } from "react";

function Carts() {
  const { getLastRegData } = useRegisterHouse();
  const swiperElRef = useRef(null);

  useEffect(() => {
    const params = {
      injectStyles: [
        `
        .swiper-button-prev,
        .swiper-button-next {
          color: red !important;
        }
        `,
      ],
    };

    Object.assign(swiperElRef.current, params);
    swiperElRef.current.initialize();
  }, []);

  return (
    <>
      <div className="mt-16 flex w-full   flex-col items-center  ">
        <div className="mb-4 flex w-[85%] justify-between">
          <p className="font-semibold "> جدیدترین خانه‌های اجاره‌ای تهران </p>

          <Link to="houses" className="text-gray-700 hover:text-red-500">
            مشاهده همه
          </Link>
        </div>
      </div>

      <swiper-container
        init="false"
        ref={swiperElRef}
        space-between="20"
        pagination-clickable="true"
        swiper-pagination-bullet-active="true"
        navigation="true"
        breakpoints={JSON.stringify({
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        })}
      >
        {getLastRegData?.map((data) => (
          <swiper-slide key={data.id}>
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
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
}

export default Carts;
