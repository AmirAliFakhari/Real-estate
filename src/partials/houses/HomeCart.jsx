import { Link } from "react-router-dom";

function HomeCart({ title, subTitle, mortgage, monthPrice, homeImg }) {
  return (
    <>
      <div className="max-w-sm flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow ">
        <img className="rounded-t-lg w-full" src={`${homeImg}`} alt="" />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 font-vazir text-base font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {subTitle}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {mortgage} | {monthPrice}
          </p>
          <Link className="inline-flex text-red-700 items-center px-3 py-2 text-sm font-medium text-center border border-red-700 rounded-lg hover:bg-blue-red focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            مشاهده
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeCart;
