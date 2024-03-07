import New from "./New";
import { Swiper, SwiperSlide } from "swiper/react";

const fakeData = [
  {
    title: "رکور312د بازار مسکن",
    text: "رکورد یسدتنشیتشستینشسیادسشتنیانشسیفروش مسکن",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/news/news1.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJuZXdzL25ld3MxLnN2ZyIsImlhdCI6MTcwOTIxMzE0NywiZXhwIjoxNzQwNzQ5MTQ3fQ.aAkT936smhSvs6NO7kSRdkGjNaXgBcTnGoR3MiRtaX4&t=2024-02-29T13%3A25%3A45.641Z",
  },
  {
    title: "رکورد 3بازار مسکن",
    text: "رکورد یسدتنشیتشستینشسیادسشتنیانشسیفروش مسکن",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/news/news1.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJuZXdzL25ld3MxLnN2ZyIsImlhdCI6MTcwOTIxMzE0NywiZXhwIjoxNzQwNzQ5MTQ3fQ.aAkT936smhSvs6NO7kSRdkGjNaXgBcTnGoR3MiRtaX4&t=2024-02-29T13%3A25%3A45.641Z",
  },
  {
    title: "رکورد 1بازار مسکن",
    text: "رکورد یسدتنشیتشستینشسیادسشتنیانشسیفروش مسکن",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/news/news1.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJuZXdzL25ld3MxLnN2ZyIsImlhdCI6MTcwOTIxMzE0NywiZXhwIjoxNzQwNzQ5MTQ3fQ.aAkT936smhSvs6NO7kSRdkGjNaXgBcTnGoR3MiRtaX4&t=2024-02-29T13%3A25%3A45.641Z",
  },
  {
    title: "رکورد 5بازار مسکن",
    text: "رکورد یسدتنشیتشستینشسیادسشتسی32نیانشسیفروش مسکن",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/news/news1.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJuZXdzL25ld3MxLnN2ZyIsImlhdCI6MTcwOTIxMzE0NywiZXhwIjoxNzQwNzQ5MTQ3fQ.aAkT936smhSvs6NO7kSRdkGjNaXgBcTnGoR3MiRtaX4&t=2024-02-29T13%3A25%3A45.641Z",
  },
  {
    title: "رکورد باز7ار مسکن",
    text: "رکورد یسدتنشیتشستینشسیادسشتنیانشسیفروش مسکن",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/news/news1.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJuZXdzL25ld3MxLnN2ZyIsImlhdCI6MTcwOTIxMzE0NywiZXhwIjoxNzQwNzQ5MTQ3fQ.aAkT936smhSvs6NO7kSRdkGjNaXgBcTnGoR3MiRtaX4&t=2024-02-29T13%3A25%3A45.641Z",
  },
];

function LastNews() {
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
          {fakeData.map((data) => (
            <SwiperSlide key={data.title}>
              <New
                key={data.title}
                title={data.title}
                img={data.img}
                text={data.text}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="translate-y-14 ">Nothing</div>
    </>
  );
}

export default LastNews;
