function News() {
  return (
    <div className="relative left-0 top-[80px]">
      <span className="ps-5 text-lg font-bold">اخبار املاک</span>
      <div className="flex w-full justify-center">
        <div className="grid w-[85%] grid-flow-row   items-center justify-items-center rounded-xl bg-gray-50 md:grid-cols-2">
          <div className="flex flex-col gap-5 px-5">
            <span className="w-fit rounded-md bg-slate-100 p-1 text-sm">
              زمان مطالعه 5 دقیقه
            </span>
            <div className="flex flex-col ">
              <span className="text-xl font-bold">رکود بازار مسکن</span>
              <span className="text-justify text-base font-bold">
                فروشندگان در انتظار خریداران و خریداران در انتظار شکست نرخ
                فروشندگان
              </span>
            </div>
            <div className="text-justify">
              <p>
                از منظر فعالان بازار مسکن، وضعیت فعلی بازار پاسخی است به جهشهای
                متوالی قیمت در سال‌های گذشته و به واسطه رشد نجومی قیمت‌ها در این
                بازار، فعلا رغبتی برای خرید این کالای ضروری اما سرمایه‌ای وجود
                ندارد.
              </p>
            </div>
            <div className="mb-5 flex justify-between">
              <div className="flex w-fit flex-wrap items-center justify-center rounded-sm bg-gray-100 p-1">
                <span className="text-sm">۳۰ آذر ۱۴۰۲</span>
                <img src="src\assets\icons\calendar.svg" alt="" />
              </div>
              <button className="rounded-md bg-red-500 p-1 text-white">
                ادامه مطالب
              </button>
            </div>
          </div>
          <img src="src\assets\imgs\Photo-news.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default News;
