import { Link } from "react-router-dom";
import notFound from "../../src/assets/imgs/notFound.svg";

function NotFound() {
  return (
    <div className="relative  top-[80px]">
      <div className="flex flex-col items-center justify-center gap-3 ">
        <img src={notFound} className="w-fit" alt="" />
        <span className="font-bold">صفحه‌ مورد نظر گم شده!</span>
        <span className="text-center">
          املاک به‌سرعت در حال خرید و فروش و اجاره‌اند، از صفحه اصلی گزینه مورد
          نظر را جست‌وجو کنید.
        </span>
        <Link to="/" className="rounded-lg bg-red-600 px-8 text-white">
          صفحه اصلی
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
