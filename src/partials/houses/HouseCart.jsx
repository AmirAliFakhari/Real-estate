import { Link } from "react-router-dom";

function HomeCart({
  title,
  state,
  mortgage,
  monthPrice,
  image_id,
  time,
  street,
  area,
  city,
  room,
  number_floors,
  rent,
}) {
  const splitingTime = time?.split(":")[0] - new Date().getHours();
  return (
    <>
      <div className="relative flex h-[23rem] w-60 max-w-sm flex-col items-center justify-center rounded-lg border border-gray-200 bg-white shadow ">
        <img
          className="h-48  w-64 rounded-t-lg object-cover"
          src={`https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/public/apartments/${image_id}-registerHouse.png`}
          alt=""
        />
        <span className="absolute left-2 top-2 rounded-sm bg-gray-400 px-2 text-white ">
          {splitingTime} ساعت پیش
        </span>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 font-vazir text-base font-bold tracking-tight text-gray-900 dark:text-white">
              رهن و اجاره آپارتمان در {city}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {state} | {street} | {`${area} متر مربع`}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {mortgage} میلیون رهن | {monthPrice} میلیون اجاره
          </p>
          <Link
            to={`/houses/${image_id}`}
            state={{
              mortgage,
              monthPrice,
              street,
              area,
              city,
              state,
              room,
              number_floors,
              rent,
            }}
            className="hover:bg-blue-red inline-flex items-center rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300 "
          >
            مشاهده
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeCart;
