import HomeCart from "../components/HomeCart";

const fakeData = [
  { title: "ALi", subtitle: "120 متر ", mortage },
  { title: "mmad" },
];

function RealStates() {
  return (
    <>
      <div className="flex flex-row-reverse w-full px-28 justify-between items-center mt-10  ">
        <p className="font-semibold"> جدیدترین خانه‌های اجاره‌ای تهران </p>
        <span className="text-Gray-10-505050">مشاهده همه</span>
      </div>
      <HomeCart />
    </>
  );
}

export default RealStates;
