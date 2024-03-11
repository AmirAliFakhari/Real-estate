import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeCart from "./HomeCart";
import "swiper/css/navigation";
import "swiper/css";

const fakeData = [
  {
    title: "رهن و اجا2ره آپارتمان تهران",
    subtitle: "۸۰ متر، محدوده پاسدارن، مکران جنوبی",
    mortage: "600 میلیون رهن",
    monthPrice: "31 میلیون تومن اجاره",
    time: "50 دقیقه",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MDg4NTQxMzAsImV4cCI6MTc0MDM5MDEzMH0.Qr3JSQvnVgP69Zlmgsa3zUVKPzrj-Yt6juFDCnz8TkA&t=2024-02-25T09%3A42%3A10.542Z",
  },
  {
    title: "رهن و اجاره آپ3ارتمان تهران",
    subtitle: "۸۰ متر، محدوده پاسدارن، مکران جنوبی",
    mortage: "600 میلیون رهن",
    monthPrice: "31 میلیون تومن اجاره",
    time: "50 دقیقه",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MDg4NTQxMzAsImV4cCI6MTc0MDM5MDEzMH0.Qr3JSQvnVgP69Zlmgsa3zUVKPzrj-Yt6juFDCnz8TkA&t=2024-02-25T09%3A42%3A10.542Z",
  },
  {
    title: "رهن و 1اجاره23 آپارتمان تهران",
    subtitle: "۸۰ متر، محدوده پاسدارن، مکران جنوبی",
    mortage: "600 میلیون رهن",
    monthPrice: "31 میلیون تومن اجاره",
    time: "50 دقیقه",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MDg4NTQxMzAsImV4cCI6MTc0MDM5MDEzMH0.Qr3JSQvnVgP69Zlmgsa3zUVKPzrj-Yt6juFDCnz8TkA&t=2024-02-25T09%3A42%3A10.542Z",
  },
  {
    title: "رهن و2 اجار543ه آپارتمان تهران",
    subtitle: "۸۰ متر، محدوده پاسدارن، مکران جنوبی",
    mortage: "600 میلیون رهن",
    monthPrice: "31 میلیون تومن اجاره",
    time: "50 دقیقه",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MDg4NTQxMzAsImV4cCI6MTc0MDM5MDEzMH0.Qr3JSQvnVgP69Zlmgsa3zUVKPzrj-Yt6juFDCnz8TkA&t=2024-02-25T09%3A42%3A10.542Z",
  },
  {
    title: "رهن و 3678اجاره آپارتمان تهران",
    subtitle: "۸۰ متر، محدوده پاسدارن، مکران جنوبی",
    mortage: "600 میلیون رهن",
    monthPrice: "31 میلیون تومن اجاره",
    time: "50 دقیقه",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MDg4NTQxMzAsImV4cCI6MTc0MDM5MDEzMH0.Qr3JSQvnVgP69Zlmgsa3zUVKPzrj-Yt6juFDCnz8TkA&t=2024-02-25T09%3A42%3A10.542Z",
  },
  {
    title: "رهن و4 اجارلبه آپارتمان تهران",
    subtitle: "۸۰ متر، محدوده پاسدارن، مکران جنوبی",
    mortage: "600 میلیون رهن",
    time: "50 دقیقه",
    monthPrice: "31 میلیون تومن اجاره",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MDg4NTQxMzAsImV4cCI6MTc0MDM5MDEzMH0.Qr3JSQvnVgP69Zlmgsa3zUVKPzrj-Yt6juFDCnz8TkA&t=2024-02-25T09%3A42%3A10.542Z",
  },
];

function SwiperSliders() {
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
        <div className="flex  flex-wrap items-center justify-center gap-5">
          {fakeData.map((data) => (
            <SwiperSlide key={data.title}>
              <HomeCart
                time={data.time}
                key={data.title}
                homeImg={data.img}
                monthPrice={data.monthPrice}
                mortgage={data.mortage}
                subTitle={data.subtitle}
                title={data.title}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}

export default SwiperSliders;
