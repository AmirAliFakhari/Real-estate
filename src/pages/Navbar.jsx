import { NavLink } from "react-router-dom";

function Navbar() {
  const menuItems = [
    "اجاره",
    "خرید",
    "املاک و مستغلات",
    "مشاورین املاک",
    "اخبار روز",
  ];
  return (
    <div className="flex justify-center font-shabnamBold">
      <div className="bg-[#F9F9F9] h-1/6  absolute z-50 w-[75%] border mt-6 rounded-md m-auto  flex flex-row-reverse justify-between p-4 items-center">
        <div className="flex items-center gap-5 list-none  ">
          <div className="flex flex-row-reverse gap-6">
            {menuItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item}`}
                className={({ isActive }) =>
                  !isActive ? "" : "text-green-500"
                }
              >
                {item}
              </NavLink>
            ))}
          </div>
          <img className="w-auto" src="/src/assets/icons/logo.svg" />
        </div>
        <div className="flex items-center justify-center gap-5">
          <button className="">ثبت آگهی</button>
          <button>ورود</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
