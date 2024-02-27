import { Link } from "react-router-dom";
import HomeCart from "../components/HomeCart";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const fakeData = [
  {
    title: "رهن و اجاره آپارتمان تهران",
    subtitle: "۸۰ متر، محدوده پاسدارن، مکران جنوبی",
    mortage: "600 میلیون رهن",
    monthPrice: "31 میلیون تومن اجاره",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MDg4NTQxMzAsImV4cCI6MTc0MDM5MDEzMH0.Qr3JSQvnVgP69Zlmgsa3zUVKPzrj-Yt6juFDCnz8TkA&t=2024-02-25T09%3A42%3A10.542Z",
  },
  {
    title: "رهن و اجاره آپارتمان تهران",
    subtitle: "۸۰ متر، محدوده پاسدارن، مکران جنوبی",
    mortage: "600 میلیون رهن",
    monthPrice: "31 میلیون تومن اجاره",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MDg4NTQxMzAsImV4cCI6MTc0MDM5MDEzMH0.Qr3JSQvnVgP69Zlmgsa3zUVKPzrj-Yt6juFDCnz8TkA&t=2024-02-25T09%3A42%3A10.542Z",
  },
  {
    title: "رهن و اجاره آپارتمان تهران",
    subtitle: "۸۰ متر، محدوده پاسدارن، مکران جنوبی",
    mortage: "600 میلیون رهن",
    monthPrice: "31 میلیون تومن اجاره",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MDg4NTQxMzAsImV4cCI6MTc0MDM5MDEzMH0.Qr3JSQvnVgP69Zlmgsa3zUVKPzrj-Yt6juFDCnz8TkA&t=2024-02-25T09%3A42%3A10.542Z",
  },
  {
    title: "رهن و اجاره آپارتمان تهران",
    subtitle: "۸۰ متر، محدوده پاسدارن، مکران جنوبی",
    mortage: "600 میلیون رهن",
    monthPrice: "31 میلیون تومن اجاره",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MDg4NTQxMzAsImV4cCI6MTc0MDM5MDEzMH0.Qr3JSQvnVgP69Zlmgsa3zUVKPzrj-Yt6juFDCnz8TkA&t=2024-02-25T09%3A42%3A10.542Z",
  },
  {
    title: "رهن و اجاره آپارتمان تهران",
    subtitle: "۸۰ متر، محدوده پاسدارن، مکران جنوبی",
    mortage: "600 میلیون رهن",
    monthPrice: "31 میلیون تومن اجاره",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MDg4NTQxMzAsImV4cCI6MTc0MDM5MDEzMH0.Qr3JSQvnVgP69Zlmgsa3zUVKPzrj-Yt6juFDCnz8TkA&t=2024-02-25T09%3A42%3A10.542Z",
  },
  {
    title: "رهن و اجاره آپارتمان تهران",
    subtitle: "۸۰ متر، محدوده پاسدارن، مکران جنوبی",
    mortage: "600 میلیون رهن",
    monthPrice: "31 میلیون تومن اجاره",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MDg4NTQxMzAsImV4cCI6MTc0MDM5MDEzMH0.Qr3JSQvnVgP69Zlmgsa3zUVKPzrj-Yt6juFDCnz8TkA&t=2024-02-25T09%3A42%3A10.542Z",
  },
];

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function RealStates() {
  return (
    <>
      <div className="flex flex-col w-full   items-center mt-16  ">
        <div className="flex justify-between w-[85%] mb-4">
          <p className="font-semibold "> جدیدترین خانه‌های اجاره‌ای تهران </p>

          <Link to="/all-hpmes" className="text-gray-700 ">
            مشاهده همه
          </Link>
        </div>
      </div>
      <Swiper
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
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="flex  flex-wrap justify-center items-center gap-5">
          {fakeData.map((data) => (
            <SwiperSlide>
              <HomeCart
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
