function Navbar() {
  return (
    <div className="bg-blue-400 z-50 w-[75%] border mt-6 rounded-md m-auto h-2/4 flex flex-row-reverse justify-between p-2 items-center">
      <div className="flex items-center gap-5 list-none  ">
        <div className="flex flex-row-reverse gap-6">
          <li>اجاره</li>
          <li>خرید</li>
          <li>املاک و مستغلات</li>
          <li>مشاورین املاک</li>
          <li>اخبار روز</li>
        </div>
        <img className="w-auto" src="/src/assets/icons/logo.svg" />
      </div>
      <div className="flex items-center justify-center gap-5">
        <button>ورود</button>
        <button>ثبت آگهی</button>
      </div>
    </div>
  );
}

export default Navbar;
