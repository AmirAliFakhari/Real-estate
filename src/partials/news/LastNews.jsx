import New from "./New";
import { Swiper, SwiperSlide } from "swiper/react";
import useNews from "./useNews";
import Spinner from "../../features/Spinner";

function LastNews() {
  const { data, isLoading } = useNews();
  if (isLoading || !data) {
    return <Spinner />;
  }
  return (
    <>
      <div className="mt-16 flex w-full   flex-col items-center  ">
        <div className="mb-4 flex w-[85%] justify-between">
          <p className="font-semibold ">
            آخرین اخبار املاک را از سقفینو دنبال کنید
          </p>
        </div>
      </div>
      <Swiper
        navigation={true}
        className="flex w-[85%]  text-center md:text-justify"
        spaceBetween={50}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <div className="flex  flex-wrap items-center justify-center gap-5  ">
          {data.map((data) => (
            <SwiperSlide key={data.title}>
              <New key={data.id} title={data.title} img={data.img} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}

export default LastNews;
