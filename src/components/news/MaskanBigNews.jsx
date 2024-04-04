function MaskanBigNews() {
  return (
    <div className=" flex h-fit flex-col gap-5 rounded-lg border border-gray-200">
      <img
        className="h-[30rem] rounded-lg object-cover "
        src="src\assets\imgs\Photo-news.svg"
        alt=""
      />
      <span className="w-fit rounded-md bg-slate-100 p-1 text-sm">
        زمان مطالعه 5 دقیقه
      </span>
      <div className="flex flex-col ">
        <span className="text-xl font-bold">رکود بازار مسکن</span>
        <span className="text-justify text-base ">
          فروشندگان در انتظار خریداران و خریداران در انتظار شکست نرخ فروشندگان
        </span>
      </div>
    </div>
  );
}

export default MaskanBigNews;
