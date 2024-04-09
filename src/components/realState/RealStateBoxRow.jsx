import { Link } from "react-router-dom";
import logo from "../../assets/icons/Real Estate Logo 2.svg";

function RealStateBoxRow() {
  return (
    <>
      <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50 p-2">
        <img className="w-fit" src={logo} alt="" />
        <div className="mt-2 flex flex-col items-center justify-center gap-2">
          <span className="font-bold">مشاور املاک توسی</span>
          <span className="font-semibold">تهران، نیاوران، سه راه یاسر</span>
          <span className="text-sm text-gray-600">
            میزان رضایتمندی: ۴/۹ از ۵
          </span>
          <span className="text-sm text-gray-600">
            آگهی‌های فعال: بیش از ۲۰۰۰{" "}
          </span>
          <Link>
            <span className="text-sm text-gray-600">
              مشاهده نظرات کاربران (۱۵ نظر)
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default RealStateBoxRow;
