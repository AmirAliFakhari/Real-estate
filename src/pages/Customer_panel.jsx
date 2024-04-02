function Customer_panel() {
  return (
    <div className="relative left-0 top-[80px]">
      <div className="  grid grid-cols-3 p-2 ">
        <div className=" col-span-full   p-1 sm:col-span-1">
          <div className="grid  h-full grid-rows-2 gap-1 sm:grid-rows-3 ">
            <div className="row-span-1 rounded-lg border border-gray-400  ">
              <div className="flex h-full items-center justify-start ps-3 ">
                <img
                  className="w-fit"
                  src="src\assets\imgs\profile-circle.svg"
                  alt=""
                />
                <div className="flex flex-col">
                  <span>نام کاربر</span>
                  <span className="text-gray-500">نوع فعالیت</span>
                </div>
              </div>
            </div>
            <div className="row-span-1   overflow-x-auto  rounded-lg border border-gray-400 sm:row-span-2 sm:overflow-hidden">
              <div className="flex h-full   w-[50rem] items-center justify-center gap-10  p-2 sm:flex-col sm:items-start sm:justify-start">
                <div className="flex w-40 items-center justify-center gap-2 ">
                  <img src="src\assets\icons\edit.svg" alt="" />
                  <span>ویرایش اطلاعات</span>
                </div>
                <div className=" flex w-40 items-center justify-center gap-2 ">
                  <img src="src\assets\icons\add-circle.svg" alt="" />
                  <span>ویرایش اطلاعات</span>
                </div>
                <div className="flex w-40 items-center justify-center gap-2 ">
                  <img src="src\assets\icons\receipt-text.svg" alt="" />
                  <span>ویرایش اطلاعات</span>
                </div>
                <div className="flex w-40 items-center justify-center gap-2 ">
                  <img src="src\assets\icons\Vector.svg" alt="" />
                  <span>ویرایش اطلاعات</span>
                </div>
                <div className="flex w-40 items-center justify-center gap-2 ">
                  <img src="src\assets\icons\logout.svg" alt="" />
                  <span>ویرایش اطلاعات</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full h-96 p-1  sm:col-span-2  sm:h-full">
          <div className="h-full rounded-lg border border-gray-400 p-1">
            dasdasd
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer_panel;
