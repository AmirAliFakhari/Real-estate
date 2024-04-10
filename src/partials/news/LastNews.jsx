import { useEffect, useRef } from "react";
import New from "./New";
import useTypeNews from "./useTypeNews";

import "swiper/css/bundle";

function LastNews() {
  const { data, isLoading } = useTypeNews();
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
      <div className="mt-16 flex   flex-col    ">
        <div className="mb-4 flex   justify-center md:justify-start md:ps-5">
          <p className="font-semibold ">
            آخرین اخبار املاک را از سقفینو دنبال کنید
          </p>
        </div>
      </div>

      <main>
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
          className="salam"
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
