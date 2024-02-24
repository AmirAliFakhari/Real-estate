import { NavLink } from "react-router-dom";

function Navbar() {
  const menuItems = {
    persion: ["اجاره", "خرید", "املاک و مستغلات", "مشاورین املاک", "اخبار روز"],
    english: ["rent", "buy", "lands", "real-estate", "news"],
  };
  return (
    <div className="flex justify-center font-shabnamBold">
      <div className="bg-[#F9F9F9] h-1/7  absolute z-50 w-[80%] border mt-6 rounded-xl m-auto  flex flex-row-reverse justify-between p-4 items-center">
        <div className="flex items-center gap-5 list-none  ">
          <div className="flex flex-row-reverse gap-6">
            {menuItems.english.map((data) => (
              <NavLink
                key={data}
                to={`/${data}`}
                className={({ isActive }) =>
                  !isActive ? " text-textColor-10" : "text-green-500"
                }
              >
                {menuItems.persion[menuItems.english.indexOf(data)]}
              </NavLink>
            ))}
          </div>
          <img className="w-auto" src="/src/assets/icons/logo.svg" />
        </div>
        <div className="flex items-center justify-center gap-5  text-textColor-10">
          <button className="border-2 border-red-400 rounded-md p-1 ">
            ثبت آگهی
          </button>
          <button>ورود</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
