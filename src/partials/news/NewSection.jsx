function NewSection() {
  return (
    <div className="flex w-full flex-col justify-center ">
      <span className="  ps-5 text-xl font-bold">مسکن</span>
      <div className="flex justify-center ">
        <div className="grid  w-[85%] grid-flow-row gap-3    rounded-xl  lg:grid-cols-2">
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
              <span className="text-justify text-base font-bold">
                فروشندگان در انتظار خریداران و خریداران در انتظار شکست نرخ
                فروشندگان
              </span>
            </div>
          </div>
          <div className=" grid  grid-cols-2 gap-2 md:grid-cols-1  md:grid-rows-2">
            <div className="flex flex-col rounded-lg border  border-gray-200">
              <img
                className="h-56 rounded-t-lg object-cover"
                src="src\assets\imgs\Photo-news.svg"
                alt=""
              />
              <span className="w-fit rounded-md bg-slate-100 p-1 text-sm">
                زمان مطالعه 5 دقیقه
              </span>
              <span className="text-justify text-base font-bold">
                فروشندگان در انتظار خریداران و خریداران در انتظار شکست نرخ
                فروشندگان
              </span>
            </div>
            <div className="flex flex-col rounded-lg border  border-gray-200">
              <img
                className="h-56 rounded-t-lg  object-cover"
                src="src\assets\imgs\Photo-news.svg"
                alt=""
              />
              <span className="w-fit rounded-md bg-slate-100 p-1 text-sm">
                زمان مطالعه 5 دقیقه
              </span>
              <span className="text-justify text-base font-bold">
                فروشندگان در انتظار خریداران و خریداران در انتظار شکست نرخ
                فروشندگان
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSection;
