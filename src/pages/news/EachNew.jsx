function EachNew() {
  return (
    <div className="relative left-0 top-[80px]">
      <div className="flex  flex-col items-center  ">
        <div className="mb-5 flex w-[85%] flex-col gap-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold">رکود بازار مسکن</span>
            <span className="text-base font-semibold">
              فروشندگان در انتظار خریداران و خریداران در انتظار شکست نرخ
              فروشندگان
            </span>
          </div>
          <div className="flex gap-5  ">
            <span className="w-fit rounded-md bg-slate-100 p-1 text-sm">
              زمان مطلاعه 5 دقیقه
            </span>
            <div className="flex w-fit flex-wrap items-center justify-center rounded-md bg-gray-100 p-1">
              <span className="text-sm">20 بهمن</span>
              <img src="src\assets\icons\calendar.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex  justify-center">
          <img
            className="w-[85%]"
            src="src\assets\imgs\new-photo3.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default EachNew;
