function TopNews({ time, title, subtitle, text, calender, type, img }) {
  return (
    <div className="flex w-full justify-center">
      <div className="grid w-[85%] grid-flow-row   items-center justify-items-center rounded-xl bg-gray-50 md:grid-cols-2">
        <div className="flex flex-col gap-5 px-5">
          <span className="w-fit rounded-md bg-slate-100 p-1 text-sm">
            {time}
          </span>
          <div className="flex flex-col ">
            <span className="text-xl font-bold">{title}</span>
            <span className="text-justify text-base font-bold">{subtitle}</span>
          </div>
          <div className="text-justify">
            <p>{text}</p>
          </div>
          <div className="mb-5 flex justify-between">
            <div className="flex w-fit flex-wrap items-center justify-center rounded-sm bg-gray-100 p-1">
              <span className="text-sm">{calender}</span>
              <img src="src\assets\icons\calendar.svg" alt="" />
            </div>
            <button className="rounded-md bg-red-500 p-1 text-white">
              ادامه مطالب
            </button>
          </div>
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default TopNews;
