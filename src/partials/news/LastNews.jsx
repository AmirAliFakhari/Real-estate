import New from "./New";
import useTypeNews from "./useTypeNews";

import "swiper/css/bundle";

function LastNews() {
  const { data, isLoading } = useTypeNews();

  return (
    <>
      <div className="mt-16 flex w-full   flex-col items-center  ">
        <div className="mb-4 flex w-[85%] justify-between">
          <p className="font-semibold ">
            آخرین اخبار املاک را از سقفینو دنبال کنید
          </p>
        </div>
      </div>

      <main>
        <swiper-container
          space-between="20"
          scrollbar-clickable="true"
          mousewheel-invert="true"
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
          {!isLoading &&
            data.slice(0, 6).map((data) => (
              <swiper-slide key={data.id}>
                <New key={data.id} title={data.title} img={data.img} />
              </swiper-slide>
            ))}
        </swiper-container>
      </main>
    </>
  );
}

export default LastNews;
