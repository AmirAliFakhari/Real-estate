import { Link } from "react-router-dom";

function HomeCart({ title, subTitle, mortgage, monthPrice, homeImg }) {
  //   console.log(title, subTitle, mortgage, monthPrice, homeImg);
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={`${homeImg}`} alt="" />
        </a>
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
          <Link className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            مشاهده
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeCart;
